const Bundle = require('../models/bundle')

module.exports = {
    create,
    delete: deleteReview,
    edit,
    update
};

function update(req, res) {
 Bundle.findOne({'reviews._id': req.params.id}, function(err, bundle) {
    const reviewSubdoc = bundle.reviews.id(req.params.id);
    if (!reviewSubdoc.user.equals(req.user._id))
    return res.redirect(`bundles/${bundle._id}`);
    reviewSubdoc.content = req.body.content;
    bundle.save(function(err){
        res.redirect(`/bundles/${bundle._id}`);
    });
 });
}

function edit(req, res) {
    Bundle.findOne({'reviews._id': req.params.id}, function(err, bundle) {
        const review = bundle.reviews.id(req.params.id);
        res.render('reviews/edit', {review});
    });
}

function deleteReview(req, res) {
    Bundle.findOne({'reviews._id': req.params.id, 'reviews.userId': req.user._id},
    function(err, bundle) {
        if (!bundle || err) return res.redirect(`/bundles/${bundle._id}`);
        bundle.reviews.remove(req.params.id);
        bundle.save(function(err) {
            res.redirect(`/bundles/${bundle._id}`);
        });
    }
    );
}

function create(req, res) {
    Bundle.findById(req.params.id, function (err, bundle) {
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;
        bundle.reviews.push(req.body);
        bundle.save(function(err) {
            res.redirect(`/bundles/${bundle._id}`);
        });
    });
}