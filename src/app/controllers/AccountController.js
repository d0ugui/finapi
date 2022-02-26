const AccountsRepository = require('../repositories/AccountsRepository');

class AccountController {
  index(req, res) {
    const accounts = AccountsRepository.findAll();
    res.json(accounts);
  }

  show(req, res) {
    const { id } = req.params;
    const account = AccountsRepository.findById(id);

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
    const { id } = req.params;

    const account = AccountsRepository.updateAccount(id, name);

    return res.status(201).json(account);
  }

  delete(req, res) {
    const { account } = req;

    res.json(AccountsRepository.deleteAccount(account));
  }
}

module.exports = new AccountController();
