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
router.get("/post/:postId", async (req, res) => {
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

// Export Module
module.exports = router;