const followModel = require('../models/follow.model')


async function followUserController(req, res) {
    const followerUsername = req.user.username
    const followingUsername = req.params.username

    if(followerUsername === followingUsername) {
        return res.status(400).json({
            message: "You cannot follow yourself"
        })
    }
const isAlreadyFollowing = await followModel.findOne({
        follower: followerUsername,
        following: followingUsername
    })

    if(isAlreadyFollowing) {
        return res.status(200).json({
            message: `You are already following ${followingUsername}`
        })
    }

    const followRecord = await followModel.create({
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