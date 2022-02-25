const { Router } = require('express');
const AccountController = require('./app/controllers/AccountController');

const router = Router();

// Retorna todos as contas
router.get('/account', AccountController.index);

module.exports = router;
