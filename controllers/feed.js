// Library Imports
const express = require("express");

// Model Imports 

// Controller Setup
const router = express.Router();

// Routes
router.get("/", (req, res) => {
    res.render("feed.ejs");
});
//! POST
//! ADD

// Export Module
module.exports = router;