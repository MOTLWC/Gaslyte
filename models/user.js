const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  profileName: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
  },
  correctGuesses: Number,
  incorrectGuesses: Number,
  fools: Number,
  incorrectFools: Number,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
