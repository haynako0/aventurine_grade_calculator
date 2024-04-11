function playVideoWithSound() {
    var video = document.getElementById('video-background');
    var playButton = document.getElementById('playButton');
    var overlay = document.getElementById('overlay');
    var gradeTitle = document.querySelector('.grade-title');

    // Play video with sound
    video.muted = false;
    video.play();

    // Add fade-out animation class to the overlay
    overlay.classList.add('fade-out');

    // Hide overlay and play button after animation completes
    setTimeout(function() {
        overlay.style.display = 'none';
        gradeTitle.style.top = '50%'; // Move the grade title to the middle of the page
    }, 1000); // Adjust duration to match the fade-out animation duration
}
