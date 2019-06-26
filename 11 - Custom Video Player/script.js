const player = document.querySelector('.player');
const video = player.querySelector('video');
const progressBar = player.querySelector('.controls .progress-bar');
const progress = progressBar.querySelector('.progress');
const playBtn = player.querySelector('.controls .play-pause');
const sliders = player.querySelectorAll('.controls [type=range]');
const skippers = player.querySelectorAll('.controls .skip');
const defaultPlaybackRate = player.querySelector('.default-playback-rate');
const displayTime = player.querySelector('.time');
let mousedown = false;


/*** FUNCTIONS ***/

// Playing Video Function
function handlePlay() {
    const playIcon = '<i class="fas fa-play"></i>';
    const pauseIcon = '<i class="fas fa-pause"></i>';
    if(video.paused) {
        video.play();
        playBtn.innerHTML = pauseIcon;
    } else {
        video.pause();
        playBtn.innerHTML = playIcon;
    }

}


// Slider Function
function handleSliders() {
    const name = this.name;
    const value = this.value;
    console.log(name, value);
    video[name] = value;
}

function resetSliders(slider) {
    const name = slider.name;
    const value = slider.value;
    video[name] = value;
}


// Skip Function
function handleSkip() {
    const currentTime = video.currentTime;
    const updatedTime = currentTime + parseInt(this.dataset.skip);
    
    video.currentTime = updatedTime;
}

// Handle Progress
function handleProgress() {
    const perCent = (100 / video.duration * video.currentTime).toFixed(2);
    progress.style.flexBasis = `${perCent}%`;
    const currentTime = video.currentTime;
    const time = formatSeconds(currentTime);
    displayTime.innerHTML = time;
}


// Update Progress
function updateProgress(e) {
    if(!mousedown) return;
    const x = e.layerX;
    const playPercent = parseFloat((100 / progressBar.offsetWidth * x).toFixed(2));
    const updatedTime = parseFloat((video.duration / 100 * playPercent).toFixed(2));
    
    video.currentTime = updatedTime;
}


// Default playbackRate function
function defaultRate() {
    video.playbackRate = 1;
    sliders.forEach(slider => {
        if(slider.name === 'playbackRate') {
            slider.value = 1;
        }
    });
}


// Function for converting seconds to HH:MM:SS format

function formatSeconds(sec) {
    let hour = 0;
    let minute = Math.floor(sec / 60);
    let second = Math.floor(sec % 60);
    if(minute >= 60) {
        hour = Math.floor(minute / 60);
        minute = Math.floor(minute % 60)
    }

    let time;

    if(hour === 0) {
        time = `${minute}:${second < 10 ? '0': ''}${second}`;
    } else {
        time = `${hour}:${minute < 10 ? '0': ''}${minute}:${second < 10 ? '0': ''}${second}`;
    }


    return time;

}


// Reset player if video has ended
function resetPlayer() {
    displayTime.innerHTML = '0:00';
    progress.style.flexBasis = '0%';
    playBtn.innerHTML = '<i class="fas fa-play"></i>';
    sliders.forEach(slider => {
        slider.value = 1;
        resetSliders(slider);
    });
}




/*** LISTENERS ***/

// Mousedown checking
progressBar.addEventListener('mousedown', () => mousedown = true);
progressBar.addEventListener('mouseup', () => mousedown = false);

// Playback listeners
video.addEventListener('click', handlePlay);
playBtn.addEventListener('click', handlePlay);

// Slider listeners
sliders.forEach(slider => slider.addEventListener('mousemove', handleSliders));
sliders.forEach(slider => slider.addEventListener('click', handleSliders));


// Skipper Listeners
skippers.forEach(skiper => skiper.addEventListener('click', handleSkip));


// Progress Listener
video.addEventListener('timeupdate', handleProgress);


// Progress Bar listener for drag
progressBar.addEventListener('mousemove', updateProgress);
progressBar.addEventListener('mousedown', updateProgress);


// Default playbackRate listener
defaultPlaybackRate.addEventListener('click', defaultRate);


// Video end listener
video.addEventListener('ended', resetPlayer);

