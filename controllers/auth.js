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
    try {
        console.log("Sign In");
        console.log(req.body);
    } catch (error) {
        console.log(error);
        res.redirect("/auth/sign-in");
    }
});

router.post("/sign-up", (req,res) => {
    try{
    console.log("Sign Up");
    console.log(req.body);
} catch (error) {
    console.log(error);
    res.redirect("/auth/sign-up");
}
});

// Export Module
module.exports = router;