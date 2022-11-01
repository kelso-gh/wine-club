const bundle = require('../models/bundle');
const Bundle = require('../models/bundle')

module.exports = {
    create
};

function create(req, res) {
    bundle.findById(req.params.id, function (err, bundle){
        bundle.reviews.push(req.body);
        bundle.save(function(err) {
            res.redirect(`/bundles/${bundle._id}`);
        });
    });
}