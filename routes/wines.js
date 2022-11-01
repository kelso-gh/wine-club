var express = require('express');
var router = express.Router();
const winesCtrl = require('../controllers/wines')
const ensureLoggedIn = require('../config/ensureLoggedIn');

// Similar to performers in movies, starts with path of '/'
router.get('/bundles/:id/wines/new', ensureLoggedIn, winesCtrl.new);
router.get('/:id', ensureLoggedIn, winesCtrl.show);
router.post('/bundles/:id/wines', ensureLoggedIn, winesCtrl.create);

module.exports = router;