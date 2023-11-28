console.log("check");



// // HTML Elements
let currentvid = document.getElementById("vid1");
let dimmer = document.getElementById("dim");

// HTML collections 
let textboxes = document.getElementsByClassName("textbox")

// // Event Listeners
window.addEventListener("scroll", function() {
    for(let i=0; i<4; i++) {
        if (textboxes[i].offsetTop - 2*textboxes[i].offsetHeight < this.scrollY) {
            textboxes[i].classList.add("fade");
        }
        else {
            textboxes[i].classList.remove("fade");
        }
    }
});


// // Functions
// Play the video (or pause if already playing)
function playVid() {
    if (currentvid.paused) {
        currentvid.play();
        dimmer.style.display = "block";
    }
    else {
        currentvid.pause();
        dimmer.style.display = "none"
    }
}
function textAppear() {
    if (window.scrollY > 200) {
        this.style.display = "block";
        console.log("passed");
    }
    else {
        this.style.display("none");
        console.log("unpass");
    }
}
function setSelf() {
    currentvid.setAttribute("src", "./videos/self.mp4")
}
function setOther() {
<<<<<<< HEAD
    if (currentvid.getAttribute("src") != "./videos/Video3Trim.mp4") {
        currentvid.setAttribute("src", "./videos/Video3Trim.mp4")
    }
=======
    currentvid.setAttribute("src", "./videos/other.mp4")
>>>>>>> parent of 4ba5573 (Website overhaul)
}