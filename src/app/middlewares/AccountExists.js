const accounts = require('../../mocks/accounts');

module.exports = (request, response, next) => {
  const { cpf } = request.headers;
  const account = accounts.find((acc) => acc.cpf === cpf);

  if (!account) {
    return response.status(400).json({ error: 'Account not found' });
  }

  request.account = account;

  return next();
};
