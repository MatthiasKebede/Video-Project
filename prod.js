let i = 0; let j = 0;
let img = document.querySelector(".carousel_image");
let img2 = document.getElementById("car2");


function swap(a) {
    if (a == 0) { // previous button
        if (i == 0) {img.setAttribute("src","./images/third.jpg"); i=2}
        else if (i == 1) {img.setAttribute("src","./images/first.jpg");i--}
        else {img.setAttribute("src","./images/second.jpg");i=1}
    }
    else if (a == 1) { // next button
        if (i == 0) {img.setAttribute("src","./images/second.jpg"); i++}
        else if (i == 1) {img.setAttribute("src","./images/third.jpg");i++}
        else {img.setAttribute("src","./images/first.jpg");i=0}
    };
}

function swap2(b) {
    if (b == 0) { // previous button
        if (j == 0) {img2.setAttribute("src","./images/third.jpg"); j=2}
        else if (j == 1) {img2.setAttribute("src","./images/first.jpg");j--}
        else {img2.setAttribute("src","./images/second.jpg");j=1}
    }
    else if (b == 1) { // next button
        if (j == 0) {img2.setAttribute("src","./images/second.jpg"); j++}
        else if (j == 1) {img2.setAttribute("src","./images/third.jpg");j++}
        else {img2.setAttribute("src","./images/first.jpg");j=0}
    };
}