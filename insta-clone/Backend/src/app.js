const express = require("express");
const cookieParser = require("cookie-parser");


const app = express()

app.use(express.json())
app.use(cookieParser())

/**
 * Routes
 */

const authRouter = require("./routes/auth.routes");
const postRouter = require("./routes/post.router");
const userRouter = require("./routes/user.router");


/**
 * Use Routes
 */
app.use("/api/auth", authRouter)
app.use("/api/posts", postRouter)
app.use("/api/users",userRouter)

module.exports = app;