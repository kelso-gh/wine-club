const Wine = require('../models/wine');


module.exports = {
    index
}

function index(req, res) {
    Wine.find({}, function(err, wines){
        res.render('wines/index', { title: 'Wine Bundles', wines })
    });
}