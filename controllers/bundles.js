const Bundle = require('../models/bundle');
const Wine = require('../models/wine')

module.exports = {
    index,
    show,
    new: newBundle,
    create
}

function index(req, res) {
    Bundle.find({}, function(err, bundles){
        res.render('bundles/index', { title: 'Wine Bundles', bundles })
    });
}

// Detail page
function show(req, res) {
    Bundle.findById(req.params.id, function(err, bundle){
        Wine.find({ bundle: bundle._id}, function(err, wines){
            res.render('bundles/show', { title: 'Bundle Detail', bundle, wines });
        });
    });
}

function newBundle(req, res) {
    res.render('bundles/new', { title: 'Add Bundle' })
}

function create(req, res) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    const bundle = new Bundle(req.body);
    bundle.save(function(err){
        if(err) return res.redirect('/bundles/new');
        console.log(bundle);
        res.redirect(`/bundles/${bundle._id}`)
    });
}