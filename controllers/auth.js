// Library Imports
const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/user.js");

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

router.post("/sign-in", async (req,res) => {
    try {
        console.log("Sign In");
        console.log(req.body);
        if (!req.body.username || !req.body.password) throw("Field Not Filled");
        const userFromDB = await User.findOne({username:req.body.username});

    } catch (error) {
        console.log(error);
        res.render("sign-in.ejs", {errorMessage:error});
    }
});

router.post("/sign-up", (req,res) => {
    try{
    console.log("Sign Up");
    console.log(req.body);
    if (!req.body.username || !req.body.password) throw("Field Not Filled");
    if (req.body.password !== req.body.passwordCheck) throw("Passwords Do Not Match")
} catch (error) {
    console.log(error);
    res.render("sign-up.ejs", {errorMessage:error});
}
});

// Export Module
module.exports = router;