var express = require('express');
var router = express.Router();
const winesCtrl = require('../controllers/wines')

// GET /movies (display all movies)
router.get('/', winesCtrl.index);

module.exports = router;