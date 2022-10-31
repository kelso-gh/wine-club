var express = require('express');
var router = express.Router();
const bundlesCtrl = require('../controllers/bundles')
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/', bundlesCtrl.index);
router.get('/new', bundlesCtrl.new);
router.get('/:id', bundlesCtrl.show);

module.exports = router;