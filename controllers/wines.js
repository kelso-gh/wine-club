const Wine = require('../models/wine');
const Bundle = require('../models/bundle');



module.exports = {
    show,
    new: newWine,
    create
}

function show(req, res) {
    Wine.findById(req.params.id, function(err, wine){
        res.render('/wines/show', { title: 'Wine Details', wine });
    });
}

function create(req, res) {
    req.body.user = req.user._id; 
    req.body.bundle = req.params.id;
    req.body.natural = !!req.body.natural;
    req.userName = req.user.name;
    req.userAvatar = req.user.avatar;
    console.log(req.body);
    Wine.create(req.body, function(err, wine) {
        console.log(err);
        res.redirect(`/bundles/${req.params.id}`);
    });
}

function newWine(req, res) {
    Wine.find({ bundle: req.params.id }, function(err, wines) {
        res.render('wines/new', {
            title: 'Add Wine',
            bundleId: req.params.id,
            wines
        });
    });
}