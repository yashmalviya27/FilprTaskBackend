const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    Designation: {
        type: String,
        required: true
    }
}, { timestamps: true });

const client = mongoose.model('Client', projectSchema);
module.exports = client;