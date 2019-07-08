const speed = document.querySelector('.speed');
const speedBar = document.querySelector('.speed-bar');
const video = document.querySelector('video');


function handleSpeed(e) {
    const y = e.clientY - speed.offsetTop;
    const speedHeight = speed.clientHeight;
    speedBar.style.flexBasis = `${y}px`;
    const videoSpeed = ((4 / speedHeight) * y).toFixed(2);
    speedBar.innerHTML = `${videoSpeed}×`;
    video.playbackRate = videoSpeed;
}

speed.addEventListener('mousemove', handleSpeed);
