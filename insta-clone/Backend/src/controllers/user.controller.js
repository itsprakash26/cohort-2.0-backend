const userModel = require("../models/user.model");


async function followUserController(req, res) {
    const followerUsername = req.user.username
    const followingUsername = req.params.username

    const followRecord = await userModel.create({
        follower: followerUsername,
        following: followingUsername
    })
    res.status(200).json({
        message: `You Are Now Following ${followingUsername}`,
        follow : followRecord
    })
}

module.exports = {
    followUserController
}