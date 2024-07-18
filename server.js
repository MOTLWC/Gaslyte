// Library Imports
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo");
require("dotenv").config();
const express = require("express");
const session = require("express-session");
const methodOverride = require("method-override");
const morgan = require("morgan");

// Local imports
const authController = require("./controllers/auth.js")
const feedController = require("./controllers/feed.js");
const profileController = require("./controllers/profile.js");
const checkSession = require("./middleware/check-session.js");
const localizeUserdata = require("./middleware/localize-user-data.js")

// Basic Setup
const app = express();

// Middleware
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(morgan("dev"));
app.use(session({ secret: process.env.SECRET, resave: false, saveUninitialized: true, store: MongoStore.create({ mongoUrl: process.env.MONGODB_URI }) }));
app.use(localizeUserdata)

// Attaching scripts
app.use(express.static("./public"));

// Controllers

app.use("/auth", authController);
app.use(checkSession);
app.use("/feed", feedController);
app.use("/profile", profileController);

// Routes 

app.get("/", (req, res) => {
    res.redirect("/feed");
});

// INIT SECTION
async function init() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        app.listen(process.env.PORT);
        console.log("--CONNECTED--");
    } catch (error) {
        console.log(error);
    }
}
init();