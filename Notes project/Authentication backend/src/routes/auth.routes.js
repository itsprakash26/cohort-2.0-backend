const express = require('express');
const userModel = require('../models/user.model');
const authRouter = express.Router();
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const { decode } = require('punycode');

authRouter.post("/register", async (req, res) => {

    // destructuring the data from the request body
    const { name, email, password } = req.body;
    console.log("Password:", password);
    // checking if the user already exists in the database
    const isUserExists = await userModel.findOne({ email })
    if (isUserExists) {
        return res.status(409)
            .json({
                message: "user already exists"
            })
    }
    // creating a new user in the database
    const user = await userModel.create({
        name,
        email,
        password: crypto.createHash("sha256").update(password).digest("hex")
        // hashing the password
    })
    // generating a JWT token for the user
    const token = jwt.sign({
        id: user._id,
    }, process.env.JWT_SECRET, { expiresIn: "1h" })
    // setting the token in the cookie
    res.cookie("token", token)
    // sending the response to the client
    res.status(201).json({
        message: "User registered successfully",
        user: {
            name: user.name,
            email: user.email
        }
    })
})

authRouter.get("/get-me", async (req, res) => {

    const token = req.cookies.token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

  
    const user = await userModel.findById(decoded.id)

    res.json({
        name: user.name,
        email: user.email
    })

})

authRouter.post("/login", async (req, res) => {
    const { email, password } = req.body
    const user = await userModel.findOne({ email })
    if (!user) {
        return res.status(404).json({
            message: "User Not Found"
        })
    }

    const hash = crypto.createHash('sha256').update(password).digest('hex')
    const isPasswordValid = hash === user.password
    if (!isPasswordValid) {
        return res.status(401).json({
            message:"invalid password"
        })
     }
      const token = jwt.sign({
        id: user._id,
    }, process.env.JWT_SECRET, { expiresIn: "1h" })
    res.cookie("token", token)

     res.status(201).json({
        message: "User Logged in successfully",
        user: {
            name: user.name,
            email: user.email
        }
    })

})


module.exports = authRouter;