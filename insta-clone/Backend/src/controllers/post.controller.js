const postModel = require("../models/post.model");
const Imagekit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");

const imagekit = new Imagekit({
    privatekey: process.env.IMAGEKIT_PRIVATE_KEY,
})

async function createPostController(req, res) {
    

    const file = await imagekit.files.upload({
        file: await toFile(Buffer.from(req.file.buffer), 'file'),
        fileName: "test",
        folder: "insta-clone-posts"
    })

    const post = await postModel.create({
        caption: req.body.caption,
        imgUrl: file.url,
        user: req.user.id
    })

    res.status(201).json({
        message: "Post Create Sucessfully",
        post
    })
}

async function getPostController(req, res) {
   

    const userId = req.user.id

    const posts = await postModel.find({
        user: userId
    })
    res.status(200).json({
        message: "post feched sucessfully.",
        posts

    })
}

async function getPostDetailsController(req, res) {
   

    const userId = req.user.id
    const postId = req.params.postId

    const post = await postModel.findById(postId)
    if(!post){
        return res.status(404).json({
            message: "Post Not Found"
        })
    }

    const isUserValid = post.user.toString() === userId
    if(!isUserValid){
        return res.status(403).json({
            message: "forbidden content."
        })
    }
    return res.status(200).json({
        message: "post feched sucessfully.",
        post
    })
}

module.exports = {
    createPostController,
    getPostController,
    getPostDetailsController
}   