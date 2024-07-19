require("dotenv").config();
const mongoose = require("mongoose");
const User = require("../models/user.js");
const Post = require("../models/post.js")

const userData = require("./users.js");
const postData = require("./posts.js");

async function seedData() {
    await mongoose.connect(process.env.MONGODB_URI);

    const deletedUsers = await User.deleteMany();
    const deletedPosts = await Post.deleteMany();

    const users = await User.create(userData);
    const postsWithUsers = postData.map((post) => {
        post.userId = users[Math.floor(Math.random() * users.length)].id

        post.likedBy = [];
        post.dislikedBy = [];
        post.votedTrue = [];
        post.votedFalse = [];

        for (let i = 0; 1 < Math.random() * users.length; i++) {
            const userToAdd = users[Math.floor(Math.random() * users.length)]._id
            if (!post.likedBy.includes(userToAdd)) {
                post.likedBy.push(userToAdd);
            }
            else if (!post.dislikedBy.includes(userToAdd)) {
                post.dislikedBy.push(userToAdd);
            }

            if (!post.votedTrue.includes(userToAdd)) {
                post.votedTrue.push(userToAdd);
            }
            else if (!post.votedFalse.includes(userToAdd)) {
                post.votedFalse.push(userToAdd);
            }
        }
        return post;
    });
    const posts = await Post.create(postsWithUsers);
    await mongoose.connection.close();
    console.log("___CLOSED___");
}

seedData()