const { response } = require('express');
const AccountsRepository = require('../repositories/AccountsRepository');

class AccountController {
  index(req, res) {
    const accounts = AccountsRepository.findAll();
    res.json(accounts);
  }

  show(req, res) {
    const { account } = req;
    const costumer = AccountsRepository.findById(account.cpf);

    if (!account) {
      return res.status(404);
    }

    return res.json(account);
  }

  store(req, res) {
    const { cpf, name } = req.body;
    const account = AccountsRepository.createAccount(cpf, name);

    return res.json(account);
  }

  update(req, res) {
    const { name } = req.body;
    const { account: { cpf } } = req;

    const costumer = AccountsRepository.updateAccount(cpf, name);

    return res.status(201).json(costumer);
  }

  delete(req, res) {
    const { account: { id } } = req;

    res.json(AccountsRepository.deleteAccount(id));
  }

  deposit(req, res) {
    const { description, amount } = req.body;
    const { account: { id } } = req;

    const depositSucess = AccountsRepository.deposit(id, description, amount);

    return res.status(201).send(depositSucess);
  }
}

module.exports = new AccountController();
