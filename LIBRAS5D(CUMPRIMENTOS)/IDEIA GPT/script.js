const video = document.getElementById('videoSinal');

// Quando passa o mouse → toca o vídeo
video.addEventListener('mouseenter', () => {
    video.currentTime = 0;
    video.play();
});

// Quando tira o mouse → pausa e reinicia
video.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;
});
