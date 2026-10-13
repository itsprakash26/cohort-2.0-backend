const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    caption: {
        type: String, 
        default: ""
    },
    imgUrl: {
        type: String,
        required: [true, "image url is required"],
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "user is required"]
    }
});

const postModel = mongoose.model("Post", postSchema);

module.exports = postModel;