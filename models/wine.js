const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wineSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    style: {
        type: String,
    },
    region: {
        type: String
    },
    natural: {
        type: Boolean,
        default: false
    },
    img: {
        type: String
    },
    bundle: {
        type: Schema.Types.ObjectId,
        ref: 'Bundle'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    userName: String,
    userAvatar: String
}, 
{
    timestamps: true
});


module.exports = mongoose.model('Wine', wineSchema);