// Library Imports
const express = require("express");

// Model Imports 

// Controller Setup
const router = express.Router();

// Routes
router.get("/sign-in", (req, res) => {
    res.render("sign-in.ejs");
});
router.get("/sign-up", (req, res) => {
    res.render("/sign-up.ejs");
});


// Export Module
module.exports = router;