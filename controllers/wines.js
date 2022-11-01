const Wine = require('../models/wine');
const Bundle = require('../models/bundle');



module.exports = {
    new: newWine,
    create
}


function create(req, res) {
    req.body.bundle = req.params.id;
    Wine.create(req.body, function(err, wine){
        res.redirect(`/bundles/${req.params.id}`);
    });
}

function newWine(req, res) {
    Wine.find({})
    .sort('name')
    .exec(function (err, wines){
        res.render('wines/new', {
            title: 'Add Wine',
            wines
        });
    });
}