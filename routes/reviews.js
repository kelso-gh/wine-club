const ensureLoggedIn = require('../config/ensureLoggedIn');
const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');



router.post('/bundles/:id/reviews', ensureLoggedIn, reviewsCtrl.create);
router.delete('/reviews/:id', ensureLoggedIn, reviewsCtrl.delete);
router.get('/reviews/:id/edit', ensureLoggedIn, reviewsCtrl.edit);
router.put('/reviews/:id', reviewsCtrl.update);

module.exports = router;