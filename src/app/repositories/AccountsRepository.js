const { v4: uuidv4 } = require('uuid');
let accounts = require('../../mocks/accounts');
const getBalance = require('../services/GetBalance');

class AccountsRepository {
  findAll() {
    return accounts;
  }

  findByCpf(cpf) {
    const account = accounts.find(
      (acc) => acc.cpf === cpf
    );

    return account;
  }

  createAccount(cpf, name) {
    const accountsAlreadyExists = accounts.some(
      (acc) => acc.cpf === cpf
    );

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

  deleteAccount(cpf) {
    accounts = accounts.filter(
      (acc) => acc.cpf != cpf
    );

    return accounts;
  }

  balance(statement) {
    const balance = getBalance(statement);

    return balance;
  }

  deposit(cpf, description, amount) {
    const statementOperation = {
      description,
      amount,
      created_at: new Date(),
      type: 'credit'
    }

    const accountDeposit = accounts.find((acc) => {
      if (acc.cpf === cpf) {
        acc.statement = [...acc.statement, statementOperation];
      }
    });

    return statementOperation;
  }

  withdraw(account, amount) {
    const balance = getBalance(account.statement);

    if(balance < amount) {
      return {error: 'Insufficient funds!'};
    }

    const statementOperation = {
      amount,
      created_at: new Date(),
      type: 'debit'
    }

    const accountWithdraw = accounts.find((acc) => {
      if (acc.cpf === account.cpf) {
        acc.statement = [...acc.statement, statementOperation];
      }
    });

    return statementOperation;
  }

  statement(cpf, date) {
    const dateFormat = new Date(date + " 00:00");

    const account = accounts.find((acc) => acc.cpf == cpf);

    const statement = account.statement.filter(
      (statement) => statement.created_at.toDateString() === new Date(dateFormat).toDateString()
    );

    return statement;
  }
}

module.exports = new AccountsRepository();
