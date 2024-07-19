// Library Imports
const express = require("express");
const bcrypt = require("bcryptjs");

// Model Imports 
const User = require("../models/user.js");

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
        if (req.body.username !== userFromDB.username) throw("Incorrect Account Details");
        console.log(bcrypt.hashSync(req.body.password, 12))
        console.log(userFromDB.password)
        if (!bcrypt.compareSync(req.body.password, userFromDB.password)) throw("Incorrect Account Details");
        req.session.user = {
            username : userFromDB.username,
            _id: userFromDB._id,
        }
        req.session.save(() => {res.redirect("/feed?filter=newest");});
    } catch (error) {
        console.log(error);
        res.render("sign-in.ejs", {errorMessage:error});
    }
});

router.post("/sign-up", async (req,res) => {
    try{
    console.log("Sign Up");
    console.log(req.body);
    if (!req.body.username || !req.body.profileName || !req.body.password) throw("Field Not Filled");
    if (req.body.password !== req.body.passwordCheck) throw("Passwords Do Not Match");
    if (await User.findOne({username: req.body.username})) throw("Username Must Be Unique");
    if (await User.findOne({profileName: req.body.profileName})) throw("Profile Name Must Be Unique");
    await User.create({username:req.body.username, profileName: req.body.profileName, password: bcrypt.hashSync(req.body.password, 12), bio:"", correctGuesses: 0, incorrectGuesses: 0, fools: 0, incorrectFools: 0});
    res.redirect("/auth/sign-in");
} catch (error) {
    console.log(error);
    res.render("sign-up.ejs", {errorMessage:error});
}
});

router.get("/sign-out", (req, res) => {
    req.session.destroy(() => {res.redirect("/");})
});

// Export Module
module.exports = router;