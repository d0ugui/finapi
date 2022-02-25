const costumers = [
  {
    id: 1,
    name: 'Douglas',
    cpf: 44202893840,
  },
  {
    id: 2,
    name: 'Bruno',
    cpf: 44202893844,
  },
];

class AccountController {
  index(req, res) {
    // Mostrar todos os registros
    return res.status(201).json(costumers);
  }
}

module.exports = new AccountController();
