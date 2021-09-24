const express = require('express');
const router = express.Router();

const usersCtrl = require('../controllers/users');

router.get('/api/users', usersCtrl.getAllUsers);

module.exports = router;