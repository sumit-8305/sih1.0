const express = require('express');
const { loginMaintainer } = require('../controllers/authController');
const router = express.Router();

router.post('/login', loginMaintainer);

module.exports = router;