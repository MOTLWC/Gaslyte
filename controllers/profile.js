// Library Imports
const express = require("express");

// Model Imports 
const User = require("../models/user.js");

// Controller Setup
const router = express.Router();

// Routes
router.get("/:profileId", async (req, res) => {
    res.render("/account.ejs", await User.findById(profileId))
});

// Export Module
module.exports = router;