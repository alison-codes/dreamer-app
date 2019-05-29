var express = require('express');
var router = express.Router();
var dreamsCtrl = require('../controllers/dreams');

router.get('/', dreamsCtrl.index);
router.get('/new', dreamsCtrl.new);
router.get('/:id', dreamsCtrl.show);
router.post('/', dreamsCtrl.create);
router.put('/:id', dreamsCtrl.update);
router.get("/dreams/:id/edit", dreamsCtrl.edit);
router.delete('/:id', dreamsCtrl.delete);

module.exports = router;