alert("HI");

let count = 0;
const box = document.getElementById("box");
const originalMargin = box.style.marginTop; // store the original margin
const pageHeight = document.body.offsetHeight; // get the height of the page

function increaseMargin() {
    box.style.marginTop = count + "px";
    count += 10;

    // check if the margin has reached the bottom of the page
    if (count + box.offsetHeight >= pageHeight) {
        resetMargin(); // reset the margin to its original value
    }
}

function resetMargin() {
    box.style.marginTop = originalMargin; // reset the margin to its original value
    count = 0; // reset the count to 0
    clearInterval(intervalId); // stop the interval
}

const intervalId = setInterval(increaseMargin, 100);  