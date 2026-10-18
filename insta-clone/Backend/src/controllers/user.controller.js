const followModel = require('../models/follow.model')
const userModel = require('../models/user.model')


async function followUserController(req, res) {
    const followerUsername = req.user.username
    const followingUsername = req.params.username

    if (followerUsername == followingUsername) {
        return res.status(400).json({
            message: "You cannot follow yourself"
        })
    }
    const isAlreadyFollowing = await followModel.findOne({
        follower: followerUsername,
        following: followingUsername
    })

    if (isAlreadyFollowing) {
        return res.status(200).json({
            message: `You are already following ${followingUsername}`
        })
    }

    const isFollowingUserExists = await userModel.findOne({
        username: followingUsername
    })

    if (!isFollowingUserExists) {
        return res.status(404).json({
            message: `you are trying to follow ${followingUsername}. But this user does not exist`
        })
    }

    const followRecord = await followModel.create({
        follower: followerUsername,
        following: followingUsername
    })
    res.status(200).json({
        message: `You Are Now Following ${followingUsername}`,
        follow: followRecord
    })
}


async function unfollowUserController(req, res) {
    const followerUsername = req.user.username
    const followingUsername = req.params.username

    const isUserFollowing = await followModel.findOne({
        follower: followerUsername,
        following: followingUsername
    })

    if (!isUserFollowing) {
        return res.status(200).json({
            message: `You are not following ${followingUsername}`
        })
    }

    await followModel.findByIdAndDelete(isUserFollowing._id)

    res.status(200).json({
        message: `You are now unfollowing ${followingUsername}`
    })
}


module.exports = {
    followUserController,
    unfollowUserController
}