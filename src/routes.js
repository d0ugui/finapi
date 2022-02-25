const { Router } = require('express');
const AccountController = require('./app/controllers/AccountController');
const AccountExists = require('./app/middlewares/AccountExists');

const router = Router();

// All registers
router.get('/account', AccountController.index);

// A unique register
router.get('/account/:id', AccountExists, AccountController.show);

// Create a register
router.post('/account', AccountController.store);

module.exports = router;
