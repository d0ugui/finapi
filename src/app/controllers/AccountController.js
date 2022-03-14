const AccountsRepository = require('../repositories/AccountsRepository');

class AccountController {
  index(req, res) {
    const accounts = AccountsRepository.findAll();
    res.json(accounts);
  }

  show(req, res) {
    const { account } = req;
    const costumer = AccountsRepository.findByCpf(account.cpf);

    if (!account.cpf) {
      return res.status(404);
    }

    return res.json(costumer);
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
    const { account: { cpf } } = req;

    res.json(AccountsRepository.deleteAccount(cpf));
  }

  balance(req, res) {
    const { account } = req;

    const balance = AccountsRepository.balance(account.statement);

    return res.status(200).json(balance)
  }

  deposit(req, res) {
    const { description, amount } = req.body;
    const { account: { cpf } } = req;

    const depositSucess = AccountsRepository.deposit(cpf, description, amount);

    return res.status(201).send(depositSucess);
  }

  withdraw(req, res) {
    const { amount } = req.body;
    const { account } = req;

    const withdrawOperation = AccountsRepository.withdraw(account, amount);

    return res.status(201).json(withdrawOperation)
  }

  statement(req, res) {
    const { account: { cpf } } = req;
    const { date } = req.query;

    const statement = AccountsRepository.statement(cpf, date);

    return res.json(statement);
  }
}

module.exports = new AccountController();
