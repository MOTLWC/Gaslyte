// Library Imports
const express = require("express");
const ejs = require("ejs")
const mongoose = require("mongoose");
const path = require("path");

// Local Imports 
const User = require("../models/user");
const Post = require("../models/post.js");
const checkSession = require("../middleware/check-session.js")

// Controller Setup
const router = express.Router();

// Routes
router.get("/", (req, res) => {
    console.log(String(req.url))
    if(String(req.url) === "/"){
        res.redirect("/feed?filter=newest")
    }
    else{
    res.render("feed.ejs");
    }
});
//! POST

router.post("/post/get/list", async (req, res) => {
    console.log(req.body) 
    let shownPosts = [];
    if (req.body.shownPosts){
    shownPosts = req.body.shownPosts.split(",").map((id) => new mongoose.Types.ObjectId(id));
    }
    let sortVariable;
    switch(req.body.filter){
        case("newest"):
        sortVariable = {createdDate : 1};
        break;
        case("oldest"):
        sortVariable = {createdDate : -1};
        break;
    }
    const returnValue = await Post.find({_id: {$nin: shownPosts}},{ sort: sortVariable , projection: {_id: 1}}).limit(10);
    console.log(returnValue);
    res.send(returnValue);
});

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
 
router.use(checkSession);

router.get("/post/:postId/delete", async (req, res) => {
    try{
    const deletedPost = await Post.findById(req.params.postId);
    console.log(deletedPost);
    if (deletedPost.userId == req.session.user._id){
        await Post.findByIdAndDelete(req.params.postId);
        console.log("Deleted")
    }
    res.redirect(`/profile/${req.session.user._id}`);
    } catch(error){
        console.log(error);
        res.redirect("/");
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