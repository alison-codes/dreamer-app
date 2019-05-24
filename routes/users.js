const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/users')

router.get('/', userCtrl.index);
router.get('/show', userCtrl.show);

module.exports = router;