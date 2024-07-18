// Library Imports
const express = require("express");
const ejs = require("ejs")
const mongoose = require("mongoose");
const path = require("path");

// Local Imports 
const User = require("../models/user");
const Post = require("../models/post.js");

// Controller Setup
const router = express.Router();

// Routes
router.get("/", (req, res) => {
    res.render("feed.ejs");
});
//! POST
router.get("/post/get/:postId", async (req, res) => {
    try {
        const postData = await Post.findById(req.params.postId);
        const data = {
            user:await User.findById(postData.userId), 
            post: postData,
        };
        res.send(await ejs.renderFile(path.join("views/templates", "post.ejs"), data));
    } catch (error) {
        console.log(error);
        res.send(error.message);
    }
});
//! ADD
router.get("/post/add", (req, res) => {
    try {
        res.render("add-post.ejs");
    } catch (error) {
        console.log(error);
    }
});

router.post("/post/add", async (req, res) => {
    try {
        const newPost = req.body;
        console.log(newPost);
        newPost.createdDate = new Date();
        newPost.nsfw = (newPost.nsfw === "on")? true : false ;
        newPost.trueFalse = (newPost.trueFalse === "on")? true : false;
        newPost.userId = new mongoose.Types.ObjectId(req.session.user._id);
        newPost.tags = newPost.tags.toLowerCase().split(", " );
        console.log(newPost);
        await Post.create(newPost);
        res.redirect(`/feed`);
    } catch (error) {
        console.log(error);
        res.render("add-post.ejs", {errorMessage : error.message});
    }
});

// Export Module
module.exports = router;