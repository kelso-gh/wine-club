var express = require('express');
var router = express.Router();
const winesCtrl = require('../controllers/wines')
const ensureLoggedIn = require('../config/ensureLoggedIn');
const wines = require('../controllers/wines');

// Similar to performers in movies, starts with path of '/'
router.get('/wines/new', ensureLoggedIn, winesCtrl.new);

module.exports = router;