// Library Imports
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo");
const dotenv = require("dotenv");
const express = require("express");
const expressServer = reqire("express-session");
const methodOverride = require("method-override");
const morgan = require("morgan");

// Local imports
const feedController = require("./controllers/feed.js")

// Basic Setup
const app = express();

// Middleware


// Controllers