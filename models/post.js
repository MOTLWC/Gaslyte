const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    userId: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "User",},
    content: {
        type: String,
        requirted: true,
    }
})

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    nsfw: {
        type: Boolean,
        required: true
    },
    trueFalse: {
        type: Boolean,
        required: true
    },
    tags: {
        type: [String]
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    createdDate: Date,
    comments: [commentSchema],
    likedBy: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "User",},
    dislikedBy: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "User",},
    votedTrue: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "User",},
    votedFalse: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "User",},
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
