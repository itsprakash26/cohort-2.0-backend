const mongoose = require('mongoose');

const followSchema = new mongoose.Schema({
   follower: {
        type: String,
   },
   following: {
        type: String,
   }           
}, {
    timestamps: true

})

const followModel = mongoose.model('Follows', followSchema);

module.exports = followModel 