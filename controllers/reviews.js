const Bundle = require('../models/bundle')

module.exports = {
    create
};

function create(req, res) {
    Bundle.findById(req.params.id, function (err, bundle){
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;
        console.log(req.body);
        bundle.reviews.push(req.body);
        bundle.save(function(err) {
            res.redirect(`/bundles/${bundle._id}`);
        });
    });
}