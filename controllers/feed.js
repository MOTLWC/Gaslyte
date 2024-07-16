// Library Imports
const express = require("express");
const User = require("../models/user");

// Model Imports 

// Controller Setup
const router = express.Router();

// Routes
router.get("/", (req, res) => {
    res.render("feed.ejs");
});
//! POST
router.get("/post/:postId", async (req, res) => {
    try {
        res.send(await User.findById(req.params.postId));
    } catch (error) {
        console.log(error);
        res.send(error.message);
    }
});
//! ADD

// Export Module
module.exports = router;