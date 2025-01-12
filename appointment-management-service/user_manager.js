const axios = require('axios');
const configs = require('./config');
const { userManagerServiceUrl, userManagerAPIkey, consumerKey, consumerSecret, tokenUrl } = configs;

const getOAuth2Token = async () => {
    const credentials = Buffer.from(`${consumerKey}:${consumerSecret}`).toString('base64');
    const response = await axios.post(tokenUrl, 'grant_type=client_credentials', {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${credentials}`
        }
    });
    return response.data.access_token;
};

const api = axios.create({
    baseURL: userManagerServiceUrl,
    headers: {
      'Content-Type': 'application/json',
      'Choreo-API-Key': userManagerAPIkey,
    }
  });

const getUserDetails = async (email) => {
    try {
        const accessToken = await getOAuth2Token();
        const response = await api.get(`/users/${email}`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });
        console.log(response);
        return response.data;
    } catch (error) {
        console.error('Error fetching user details:', error);
        throw error;
    }
};

module.exports = getUserDetails;