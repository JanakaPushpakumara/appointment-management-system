// Read configuration from the environment

// Datbase configruation
const dbHost = '';
const dbUser = '';
const dbPassword = '';
const dbName = '';
const dbPort = '';

// Twilio configruation
const twilioAccountSid = process.env.CHOREO_TWILIO_CONNECTION_ACCOUNT_SID;
const twilioAuthToken = process.env.TWILIO_AUTH_TOKEN;
const twilioFromPhoneNumber = process.env.TWILIO_FROM_PHONE_NUMBER;

// User Manager configuration
const userManagerServiceUrl = process.env.CHOREO_USER_MANAGER_SERVICE_CONNECTION_SERVICEURL;
const userManagerAPIkey = process.env.CHOREO_USER_MANAGER_SERVICE_CONNECTION_CHOREOAPIKEY;
const consumerKey = process.env.CHOREO_USER_MANAGER_SERVICE_CONNECTION_CONSUMERKEY;
const consumerSecret = process.env.CHOREO_USER_MANAGER_SERVICE_CONNECTION_CONSUMERSECRET;
const tokenUrl = process.env.CHOREO_USER_MANAGER_SERVICE_CONNECTION_TOKENURL;

module.exports = {
    dbHost,
    dbUser,
    dbPassword,
    dbName,
    dbPort,
    twilioAccountSid,
    twilioAuthToken,
    twilioFromPhoneNumber,
    userManagerServiceUrl,
    userManagerAPIkey,
    consumerKey,
    consumerSecret,
    tokenUrl
};