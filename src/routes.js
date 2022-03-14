//* Importando express
const { Router } = require('express');

//* Importando Controller
const AccountController = require('./app/controllers/AccountController');

//* Importando Middleware
const AccountExists = require('./app/middlewares/AccountExists');

//* Instânciando rotas
const router = Router();

//* All registers
router.get('/accounts', AccountController.index);

//* A Unique account
router.get('/account', AccountExists, AccountController.show);

//* Create a account
router.post('/account', AccountController.store);

//* Update a account
router.put('/account', AccountExists, AccountController.update);

//* Delete a account
router.delete('/account', AccountExists, AccountController.delete);

//* Account Balance
router.get('/balance', AccountExists, AccountController.balance);

//* Deposit in account
router.post('/deposit', AccountExists, AccountController.deposit);

//* Withdraw operation
router.post('/withdraw', AccountExists, AccountController.withdraw);

//* Statement with date
router.get('/statement/date', AccountExists, AccountController.statement);


//* Importando instância de rotas
module.exports = router;
