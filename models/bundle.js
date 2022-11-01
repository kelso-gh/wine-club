const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema ({
    content: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        defailt: 5
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    userName: String,
    userAvatar: String
}, {
    timestamps: true
});

const bundleSchema = new Schema({
    bundle: {
        type: String,
        required: true
    },
    wine1: [{
        type: Schema.Types.ObjectId,
        ref: 'Wine'
    }],
    wine2: [{
        type: Schema.Types.ObjectId,
        ref: 'Wine'
    }],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    userName: String,
    userAvatar: String
}, {
    reviews: [reviewSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Bundle', bundleSchema);