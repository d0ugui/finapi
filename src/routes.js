const { Router } = require('express');
const AccountController = require('./app/controllers/AccountController');
const AccountExists = require('./app/middlewares/AccountExists');

const router = Router();

// All accounts
router.get('/accounts', AccountController.index);

// A unique account
router.get('/account', AccountExists, AccountController.show);

// Create a account
router.post('/account', AccountController.store);

// Update a account
router.put('/account', AccountExists, AccountController.update);

// Delete a account
router.delete('/account', AccountExists, AccountController.delete);

// Deposit in account
router.post('/deposit', AccountExists, AccountController.deposit);

module.exports = router;
