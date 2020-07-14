const crossbarConnector = require('../dist/index')

function later(delay) {
  return new Promise(function(resolve) {
      setTimeout(resolve, delay);
  });
}

const instance = new crossbarConnector.Crossbar({
  baseURL: process.env.BASE_URL,
  accountId: process.env.ACCOUNT_ID,
  pvtApiKey: process.env.PRIVATE_API_KEY
})

beforeAll(() => {
  // Wait for axios to request for auth token and set as header.
  return later(1000)
})

test('Get account by id', () => {
  return instance.accountService.getAccountById().then(response => {
    expect(response).toHaveProperty('status', 200);
    expect(response.data).toHaveProperty('status', 'success')
    expect(response.data).toHaveProperty('data')
  }).catch(error => {
    console.log(error)
  })
})

test('Get account children', () => {
  return instance.accountService.getAccountChildren().then(response => {
    console.log(response)
    expect(response).toHaveProperty('status', 200);
    expect(response.data).toHaveProperty('status', 'success')  })
})