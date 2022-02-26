const accounts = require('../../mocks/accounts');

module.exports = (request, response, next) => {
  const { id } = request.params;
  const account = accounts.find((acc) => acc.id === id);

  if (!account) {
    return response.status(400).json({ error: 'Account not found' });
  }

  request.account = account;

  return next();
};
