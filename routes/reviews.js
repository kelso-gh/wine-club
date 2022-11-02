const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');
// const ensureLoggedIn = require('../config/ensureLoggedIn');


router.post('/bundles/:id/reviews', reviewsCtrl.create);

module.exports = router;