console.log("check");



// // HTML Elements
let currentvid = document.getElementById("vid1");
let dimmer = document.getElementById("dim");
let video = document.getElementById("wordcloud");
let text=document.getElementsByClassName("typewrite-text");

// HTML collections 
let textboxes = document.getElementsByClassName("textbox")
let typewritertext = document.getElementsByClassName("typewriter-text");

// // Event Listeners
window.addEventListener("scroll", function() {
    // textboxes
    for(let i=0; i<4; i++) {
        if (textboxes[i].offsetTop - 2*textboxes[i].offsetHeight < this.scrollY) {
            textboxes[i].classList.add("fade");
        }
        else {
            textboxes[i].classList.remove("fade");
        }
    }
    // typewrite text
    for (let i=0; i<2; i++) {
        if (this.scrollY > 800) {
            typewritertext[i].classList.add("fade");
        }
        else {
            typewritertext[i].classList.remove("fade");
        }
    }
    if(893<this.scrollY){
        text[0].classList.add("text-animation");
    }
});
video.addEventListener("click",function(){
    if(video.paused){
        video.play();
    }
});


// // Flag to track whether the video has ended
// var videoEnded = false;
// var scrollingTimeout;

// // Listen for video ended event
// video.addEventListener("ended", function() {
//     videoEnded = true;
// });

// // Listen for scroll events
// document.addEventListener("scroll", function(event) {
//     // Scroll only when the video has ended
//     if (videoEnded) {
//     } else {
//         // Prevent the default scroll behavior
//         event.preventDefault();
//         event.stopPropagation();
//         //play the video when scrolling
//         video.play();
//         var scrollSpeed = window.scrollY / 100; // Adjust the scroll speed
//         video.playbackRate = 1 + scrollSpeed;
//         // Reset the scrolling timeout
//         clearTimeout(scrollingTimeout);
//         scrollingTimeout = setTimeout(function() {
//             // Pause the video when scrolling stops
//             video.pause();
//         }, 200); 
//     }
// });




// // Functions
// Play the video (or pause if already playing)
// function playVid() {
//     if (currentvid.paused) {
//         currentvid.play();
//         dimmer.style.display = "block";
//     }
//     else {
//         currentvid.pause();
//         dimmer.style.display = "none"
//     }
// }
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
    if (currentvid.getAttribute("src") != "https://media.githubusercontent.com/media/MatthiasKebede/Video-Project/main/videos/Video2CommLab.mp4") { // videos/Video2CommLab.mp4
        currentvid.setAttribute("src", "https://media.githubusercontent.com/media/MatthiasKebede/Video-Project/main/videos/Video2CommLab.mp4")
    }
}
function setOther() {
    if (currentvid.getAttribute("src") != "https://media.githubusercontent.com/media/MatthiasKebede/Video-Project/main/videos/Video3CommLab.mp4") { // videos/Video3CommLab.mp4
        currentvid.setAttribute("src", "https://media.githubusercontent.com/media/MatthiasKebede/Video-Project/main/videos/Video3CommLab.mp4")
    }
}


    
