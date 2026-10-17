const mongoose = require('mongoose');

const followSchema = new mongoose.Schema({
    follower: {
        type: string,
    },
    following: {
        type: string,
    }
}, {
    timestamps: true

})

const followModel = mongoose.model('Follows', followSchema);

module.exports = followModel 