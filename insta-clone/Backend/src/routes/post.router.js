const express = require("express");
const postRouter = express.Router(); 
const createPostController = require("../controllers/post.controller")
const multer = require("multer");
const upload = multer({storage: multer.memoryStorage()}) // Store the uploaded file in memory
/**
 * POST /api/posts [protected]
 * req.body: { caption, imgfile }
 */

postRouter.post("/", upload.single("imgfile"), createPostController.createPostController)

postRouter.get("/", createPostController.getPostController)

module.exports = postRouter;