const { Router } = require('express');
const AccountController = require('./app/controllers/AccountController');
const AccountExists = require('./app/middlewares/AccountExists');

const router = Router();

// All accounts
router.get('/account', AccountController.index);

// A unique account
router.get('/account/:id', AccountExists, AccountController.show);

// Create a account
router.post('/account', AccountController.store);

// Update a account
router.put('/account/:id', AccountExists, AccountController.update);

// Delete a account
router.delete('/account/:id', AccountExists, AccountController.delete);

module.exports = router;
