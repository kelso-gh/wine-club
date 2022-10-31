var express = require('express');
var router = express.Router();
const winesCtrl = require('../controllers/wines')
const ensureLoggedIn = require('../config/ensureLoggedIn');

// GET /wines (display all movies)
router.get('/', winesCtrl.index);
router.get('/:id', winesCtrl.show);

module.exports = router;