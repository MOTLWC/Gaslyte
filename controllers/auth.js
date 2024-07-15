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
    res.render("sign-up.ejs");
});

router.post("/sign-in", (req,res) => {
    console.log("Sign In");
    console.log(req.body);
});

router.post("/sign-up", (req,res) => {
    console.log("Sign Up");
    console.log(req.body);
});

// Export Module
module.exports = router;