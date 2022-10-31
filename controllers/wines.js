const Wine = require('../models/wine');


module.exports = {
    index,
    show
}

function index(req, res) {
    Wine.find({}, function(err, wines){
        res.render('wines/index', { title: 'Wine Bundles', wines })
    });
}

function show(req, res) {
    Wine.findById(req.params.id)
}