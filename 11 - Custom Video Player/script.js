const player = document.querySelector('.player');
const video = player.querySelector('.video');
const controls = player.querySelector('.controls');
const progress = controls.querySelector('.progress-bar .progress');
const playBtn = controls.querySelector('.play-pause');
const sliders = controls.querySelectorAll('input');
const skippers = controls.querySelectorAll('.skip');
const progressBar = controls.querySelector('.progress-bar');
let mousedown = false;



// playbackRate ; volume ; paused: true video.play() video.pause()


function handlePlay(e) {
    const pauseIcon = '<i class="fas fa-pause"></i>'
    const playIcon = '<i class="fas fa-play"></i>'
    
    if(this.classList.contains('play')) {
        this.classList.remove('play');
        this.classList.add('pause');
        this.innerHTML = pauseIcon;
        video.play();
    } else {
        this.classList.remove('pause');
        this.classList.add('play');
        this.innerHTML = playIcon;
        video.pause();
    }
}


function handleSliders(e) {
    
    const value = this.value;
    const action = this.name;
    
    video[action] = value;
}


function handleSkip(e) {
    const skiping = parseInt(this.dataset.skip);
    

    const currentTime = video.currentTime + skiping;

    video.currentTime = currentTime;
}


function updateProgress(e) {
    const currentTime = video.currentTime;
    const duration = video.duration;
    const perCent = (100 / duration * currentTime).toFixed(2);
    progress.style.flexBasis = `${perCent}%`;
}


function changeProgress(e) {
    const x = e.offsetX;
    const width = progressBar.clientWidth;
    const perCent = 100 / width * x;
    progress.style.flexBasis = `${perCent}%`;

    const currentTime = video.duration / 100 * perCent;
    video.currentTime = currentTime;
}

function videoCompleted(e) {
    const playIcon = '<i class="fas fa-play"></i>';
    playBtn.classList.remove('pause');
    playBtn.classList.add('play');
    playBtn.innerHTML = playIcon;

}


function handleVideoClick() {
    
    const pauseIcon = '<i class="fas fa-pause"></i>'
    const playIcon = '<i class="fas fa-play"></i>'
    
    if(playBtn.classList.contains('play')) {
        playBtn.classList.remove('play');
        playBtn.classList.add('pause');
        playBtn.innerHTML = pauseIcon;
        video.play();
    } else {
        playBtn.classList.remove('pause');
        playBtn.classList.add('play');
        playBtn.innerHTML = playIcon;
        video.pause();
    }
}

playBtn.addEventListener('click', handlePlay);
sliders.forEach(slider => slider.addEventListener('click', handleSliders));
sliders.forEach(slider => slider.addEventListener('mousemove', handleSliders));
skippers.forEach(skip => skip.addEventListener('click', handleSkip));
video.addEventListener('timeupdate', updateProgress);
video.addEventListener('ended', videoCompleted);
video.addEventListener('click', handleVideoClick);
progressBar.addEventListener('click', changeProgress);
progressBar.addEventListener('mousedown',() => mousedown = true);
progressBar.addEventListener('mouseup',() => mousedown = false);
progressBar.addEventListener('mousemove',(e) => {
    if(!mousedown) return;
    changeProgress(e);
});



