const accounts = require('../../mocks/accounts');

class AccountsRepository {
  findAll() {
    return accounts;
  }

  findById(id) {
    const account = accounts.find((acc) => acc.id == id);
    return account;
  }

  create(cpf, name) {
    const accountsAlreadyExists = accounts.some((acc) => acc.cpf === cpf);

    if (accountsAlreadyExists) {
      return { error: 'Customer already exists!' };
    }

    accounts.push({
      id: Math.random(),
      name,
      cpf,
      statement: [],
    });

    return { cpf, name };
  }
}

module.exports = new AccountsRepository();
