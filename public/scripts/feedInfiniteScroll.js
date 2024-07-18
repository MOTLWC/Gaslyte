const sideMenu = document.getElementById("sideMenu");
const menuElements = document.getElementById("menuElements");
const menuToggle = document.getElementById("menuToggle");
const mainFeed = document.getElementById("mainFeed");

const filterForm = document.getElementById("filterForm");

menuToggle.addEventListener("click", toggleMenuElements);
filterForm.addEventListener("submit", setFilters);

const nextPosts = [];
const shownPosts = [];
const filterObject = {};

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
    console.log(filterObject)
}

async function setFilters() {
    const tempParams= new URLSearchParams(window.location.search);
    tempParams.forEach((value, key) => {
        filterObject[key] = value;
    })
}

function toggleMenuElements() {
    console.log("running")
    menuElements.style.display = (menuElements.style.display === "flex")? "none" : "flex";
}
setFilters();
getNextPosts()