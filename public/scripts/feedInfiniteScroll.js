const sideMenu = document.getElementById("sideMenu");
const menuElements = document.getElementById("menuElements");
const menuToggle = document.getElementById("menuToggle");
const mainFeed = document.getElementById("mainFeed");

const filterForm = document.getElementById("filterForm");

menuToggle.addEventListener("click", toggleMenuElements);
// filterForm.addEventListener("submit", setFilters);

let errorBool = false;
let nextPosts = [];
const shownPosts = [];
const filterObject = {};

async function sendUrlQuery() {
    try {
        // console.log(errorBool)
        if (errorBool) return;
        if (nextPosts.length === 0) {
            getNextPosts();
        }else{
            if (nextPosts[0].length < 4){ errorBool = true;
                return;
            }
        // console.log(nextPosts[0].substr(8, 24))
        shownPosts.push(nextPosts[0].substr(8, 24));
        const newPost = await fetch(`/feed/post/get/${nextPosts.shift().substr(8, 24)}`);
        mainFeed.innerHTML += await newPost.text();
        }
    } catch (error) {
        errorBool = true;
        // console.log(error.message);
    }
}

async function getNextPosts() {
    try {
        // console.log(errorBool)
        if (errorBool) return;
        nextPosts = nextPosts.concat(await (await fetch("/feed/post/get/list", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({
                filter: filterObject.filter,
                nsfwToggle: filterObject.nsfwValue,
                shownPosts: shownPosts
            }),
        })).text());
        // console.log(nextPosts);
        nextPosts = nextPosts[0].replace("[", "").replace("]", "").split(",")
    } catch (error) {
        errorBool = true;
        // console.log(error)
    }
    // console.log("ran finis")
    // console.log(nextPosts);
}

function setFilters() {
    const tempParams = new URLSearchParams(window.location.search);
    tempParams.forEach((value, key) => {
        filterObject[key] = value;
    })
}

function toggleMenuElements() {
    // console.log("running")
    menuElements.style.display = (menuElements.style.display === "flex") ? "none" : "flex";
}

async function init() {
    setFilters();
    await getNextPosts();
    await sendUrlQuery();
    await sendUrlQuery();
    await sendUrlQuery();
}
init();

function throttle(func, limit) {
    // console.log(errorBool)
    if (errorBool) return;
    let time = Date.now();
    return () => {
        if ((time + limit - Date.now()) <= 0) {
            func();
            time = Date.now();
        }
    }
}

async function onScrollFunction(e) {
    // console.log(errorBool)
    if (errorBool) return;
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        await sendUrlQuery();
    }
}
window.onscroll = throttle(onScrollFunction, 500);