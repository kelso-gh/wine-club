const Bundle = require('../models/bundle');
const Wine = require('../models/wine')

module.exports = {
    index,
    show,
    new: newBundle
}

function index(req, res) {
    Bundle.find({}, function(err, wines){
        res.render('wines/index', { title: 'Wine Bundles', wines })
    });
}

// Detail page
function show(req, res) {
    Bundle.findById(req.params.id)
    res.render('wines/show', {
        title: 'Bundle Detail',
        bundle,
        wines
    });
}

function newBundle(req, res){
    res.render('bundles/new', { title: 'Add Bundle' })
}