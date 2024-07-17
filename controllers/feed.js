// Library Imports
const express = require("express");

// Local Imports 
const checkSession = require("../middleware/check-session.js");
const User = require("../models/user");

// Controller Setup
const router = express.Router();

// Routes
router.get("/", (req, res) => {
    res.render("feed.ejs");
});
//! POST
router.get("/post/get/:postId", async (req, res) => {
    try {
        res.send(await User.findById(req.params.postId));
    } catch (error) {
        console.log(error);
        res.send(error.message);
    }
});
// ? I want non users to see posts but not iteract
router.use(checkSession);
// ?
//! ADD
router.get("/post/add", (req, res) => {
    try {
        res.render("add-post.ejs");
    } catch (error) {
        console.log(error);
    }
});

router.post("/post/add", async (req, res) => {
    const newPost = req.body;
    console.log(newPost);
    newPost.createdDate = new Date();
    newPost.nsfw = (newPost.nsfw === "on")? true : false ;
    newPost.trueFalse = (newPost.trueFalse === "on")? true : false;
    console.log(newPost);
});

// Export Module
module.exports = router;