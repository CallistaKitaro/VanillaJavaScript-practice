/* Get our elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

/* Build function for the elements */
function togglePlay() {
    if (video.paused) {
        video.play();
        console.log("play")
    }
    else {
        video.pause();
        console.log("paused");
    }
}

/* Hook up the event listener */
video.addEventListener("click", togglePlay);