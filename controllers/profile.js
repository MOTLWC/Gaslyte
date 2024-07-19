// Library Imports
const express = require("express");

// Model Imports 
const User = require("../models/user.js");
const Post = require("../models/post.js");

// Controller Setup
const router = express.Router();

// Routes
router.get("/:profileId", async (req, res) => {
    const userPosts = await Post.find({userId: req.params.profileId}, {_id: 1, title: 1});
    console.log(userPosts);
    res.render("account.ejs", {profileUser:await User.findById(req.params.profileId), userPosts : userPosts});
});

router.get("/:profileId/edit", async (req, res) => {
    res.render("accountEdit.ejs", await User.findById(req.params.profileId));
});

router.post("/:profileId", async (req, res) => {
    try {
        console.log("profilename")
        console.log(req.body.profileName)
        if (!req.body.profileName) throw("");
        await User.findByIdAndUpdate(req.session.user._id, req.body);
        res.redirect(`/profile/${req.session.user._id}`);

    } catch (error) {
        console.log(error);
        res.redirect(`/profile/${req.session.user._id}/edit`);
    }
});

// Export Module
module.exports = router;