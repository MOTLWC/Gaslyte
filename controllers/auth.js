// Library Imports
const express = require("express");
const bcrypt = require("bcryptjs");

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
    try {
        console.log("Sign In");
        console.log(req.body);
        if (!req.body.username || !req.body.password) throw("Field Not Filled");

    } catch (error) {
        console.log(error);
        res.render("sign-in.ejs", {errorMessage:error});
    }
});

router.post("/sign-up", (req,res) => {
    try{
    console.log("Sign Up");
    console.log(req.body);
} catch (error) {
    console.log(error);
    res.render("sign-up.ejs");
}
});

// Export Module
module.exports = router;