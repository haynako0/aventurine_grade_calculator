window.onload = function() {
    var chatBubble = document.getElementById('chatBubble');
    setTimeout(function() {
        chatBubble.style.display = 'none';
    }, 5000);
};

function toggleSound() {
    var video = document.getElementById('video-background');
    var soundButton = document.getElementById('soundButton');
    var chatBubble = document.getElementById('chatBubble');

    if (video.muted) {
        video.muted = false;
        soundButton.innerHTML = '<img src="img/kakavasha.webp" alt="Sound Button">';
    } else {
        video.muted = true;
        soundButton.innerHTML = '<img src="img/kakavasha.webp" alt="Mute Button">';
    }
}
