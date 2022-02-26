const { v4: uuidv4 } = require('uuid');
let accounts = require('../../mocks/accounts');

class AccountsRepository {
  findAll() {
    return accounts;
  }

  findById(id) {
    const account = accounts.find((acc) => acc.id === id);
    return account;
  }

  createAccount(cpf, name) {
    const accountsAlreadyExists = accounts.some((acc) => acc.cpf === cpf);

    if (accountsAlreadyExists) {
      return { error: 'Customer already exists!' };
    }

    const account = {
      id: uuidv4(),
      name,
      cpf,
      statement: [],
    };

    accounts.push(account);

    return account;
  }

  updateAccount(id, name) {
    const newName = accounts.find((acc) => acc.id === id);

    if (newName) {
      newName.name = name;
    }

    return newName;
  }

  deleteAccount(account) {
    accounts = accounts.filter((acc) => acc.id != account.id);

    return accounts;
  }
}

module.exports = new AccountsRepository();
