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
    }
});
