const express = require("express");
const postRouter = express.Router(); 
const createPostController = require("../controllers/post.controller")
const multer = require("multer");
const upload = multer({storage: multer.memoryStorage()}) // Store the uploaded file in memory
const identifyUser = require("../middleware/auth.middleware")
/**
 * POST /api/posts [protected]
 * req.body: { caption, imgfile }
 */
postRouter.post("/", identifyUser, upload.single("imgfile"), createPostController.createPostController)
/**
 * GET /api/posts [protected]
 */
postRouter.get("/", identifyUser, createPostController.getPostController)
/**
 * GET /api/posts/details/:postId [protected]
 * req.params: { postId }
 */
postRouter.get("/details/:postId", identifyUser, createPostController.getPostDetailsController)

/**
 * POST /api/posts/like/:postId [protected]
 * req.params: { postId }
 */
postRouter.post("/like/:postId", identifyUser, createPostController.likePostController)  
 

module.exports = postRouter;