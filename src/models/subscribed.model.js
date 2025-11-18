const mongoose = require('mongoose');

const subscribedSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    }
}, { timestamps: true });

const Subscribed = mongoose.model('Subscribed', subscribedSchema);
module.exports = Subscribed;