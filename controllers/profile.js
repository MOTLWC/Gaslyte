// Library Imports
const express = require("express");

// Model Imports 
const User = require("../models/user.js");

// Controller Setup
const router = express.Router();

// Routes
router.get("/:profileId", async (req, res) => {
    console.log(await User.findById(req.params.profileId))
    res.render("account.ejs", await User.findById(req.params.profileId))
});

// Export Module
module.exports = router;