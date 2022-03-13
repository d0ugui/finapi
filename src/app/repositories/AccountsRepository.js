const { v4: uuidv4 } = require('uuid');
let accounts = require('../../mocks/accounts');

class AccountsRepository {
  findAll() {
    return accounts;
  }

  findById(cpf) {
    const account = accounts.find((acc) => acc.cpf === cpf);

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

  updateAccount(cpf, name) {
    const newName = accounts.find((acc) => acc.cpf === cpf);

    if (newName) {
      newName.name = name;
    }

    return newName;
  }

  deleteAccount(id) {
    accounts = accounts.filter((acc) => acc.id != id);

    return accounts;
  }

  deposit(id, description, amount) {
    const statementOperation = {
      description,
      amount,
      created_at: new Date(),
      type: 'credit'
    }

    const accountDeposit = accounts.find((acc) => {
      if (acc.id === id) {
        acc.statement = [...acc.statement, statementOperation];
      }
    });

    return statementOperation;
  }
}

module.exports = new AccountsRepository();
