const drumKeys = document.querySelectorAll('.drum-key');
const audioFiles = document.querySelectorAll('audio');


function playSound(e) {
    const code = e.keyCode;

    // Add class active to the right drum key
    drumKeys.forEach(drumKey => {
        const key = parseInt(drumKey.dataset.key);
        if(code === key) {
            drumKey.classList.add('active');

            setTimeout(() => {
                drumKey.classList.remove('active');
            }, 100);
        }
    });

    // Play the actual audio file
    audioFiles.forEach(audio => {
        const key = parseInt(audio.dataset.key);
        if(code === key) {
            console.log(audio);
             audio.currentTime = 0;
            audio.play();
        }
        
    })
    
}

window.addEventListener('keydown', playSound);