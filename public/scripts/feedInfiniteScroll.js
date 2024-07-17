const sideMenu = document.getElementById("sideMenu");
const menuElements = document.getElementById("menuElements");
const menuToggle = document.getElementById("menuToggle");

menuToggle.addEventListener("click", toggleMenuElements);


const nextPosts = [];
const shownPosts = [];

async function sendUrlQuery() {
    try {
        shownPosts.push(nextpost[0]);
        const newPost = await fetch(`/feed/post/${nextPosts.shift()}`);

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