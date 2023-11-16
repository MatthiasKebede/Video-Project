console.log("check");



// // HTML Elements
let currentvid = document.getElementById("vid1");




// // Event Listeners




// // Functions
// Play the video (or pause if already playing)
function playVid() {
    if (currentvid.paused) {
        currentvid.play();
    }
    else {
        currentvid.pause();
    }
}
