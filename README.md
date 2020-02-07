# @reperio/crossbar
[npm package](https://www.npmjs.com/package/@reperio/crossbar)

node.js sdk for [Kazoo](https://github.com/2600hz/kazoo/).

### Current Supported APIs
- Accounts
- API Auth
- Callflows
- Call Inspectors
- CDRs
- Devices
- Faxes
- User Auth
- Users

# Authentication

Kazoo's Crossbar API uses your `account_id` and your `auth_token` to
authenticate each request. The `auth_token` is temporary, but refreshes its 
expiration timestamp on each request. However your account also has a permenant
`api_key` which is used to get the initial `auth_token`.
This node module offers three different forms of handling authentication.

### 1. Provide only the `api_key`
The first is supplying only the `api_key` through the constructor value
`pvtApiKey`, which will send a request at the initialization of the connector
to get your account `auth_token` and will be able to redo that request if a 
route ever returns a `401 unauthorized` response.

### 2. Provide only the `auth_token`
The second option is only supplying the `auth_token` through the `authToken` 
value. This means that the parent program is entirely responsible for handling 
authentication & keeping the auth token up to date.

### 3. Provide both the `api_key` and `auth_token`
The final option is to provide both values. As a result, the request for an 
`auth_token` will not be made on intialization, and it can be assumed that the 
parent program is handling authentication in an efficient way to minimize 
extraneous calls for an `auth_token` while still providing the 
`401 unauthorized` response by retrieving a new token.

# Examples
```js
const CrossbarConnector = require('@reperio/crossbar');

const crossbar = new CrossbarConnector.Crossbar({
    baseURL: 'http://127.0.0.1',
    accountId: 'kazoo-account-id',
    authToken: 'temporary-auth-token',
    pvtApiKey: 'permenant-api-key',
});

// Example of Getting CDRs with no parameters
const cdrs = await crossbar.cdrService.getCdrs();

// Example of using Global Query Params
const userQueryParams = {
    filter: {
        key: 'first_name',
        value: 'James'
    }
};

const usersNamedJames = await crossbar.userService.getUsers(userQueryParams); 

// Example of nested filter parameters
const recordingQueryParams = {
    filter: {
        key: 'custom_channel_vars',
        value: {
            key: 'Call-Interaction-ID',
            value: '63741914152-5813c485'
        }
    }
};

const recording = await crossbar.recordingService.getRecordings(recordingQueryParams);
```
