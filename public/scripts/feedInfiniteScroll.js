const sideMenu = document.getElementById("sideMenu");
const menuElements = document.getElementById("menuElements");
const menuToggle = document.getElementById("menuToggle");
const mainFeed = document.getElementById("mainFeed");

menuToggle.addEventListener("click", toggleMenuElements);

const nextPosts = [];
const shownPosts = [];

async function sendUrlQuery() {
    try {
        shownPosts.push(nextPosts[0]);
        const newPost = await fetch(`/feed/post/get/${nextPosts.shift()}`);
        mainFeed.innerHTML += await newPost.text();
    } catch (error) {
        console.log(error);
    }
}

async function getNextPosts(){

}

function toggleMenuElements() {
    console.log("running")
    menuElements.style.display = (menuElements.style.display === "flex")? "none" : "flex";
}