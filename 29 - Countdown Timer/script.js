const timer = document.querySelector('.timer');
const buttons = timer.querySelectorAll('.timer-button');
const customTime = timer.querySelector('#custom');
const timeLeft = timer.querySelector('.time-left');
const backAt = timer.querySelector('.back-at');
let countdown;


// Timer and Display functions
function timerFunction(sec) {
    // Clear countdown interval
    clearInterval(countdown);
    const now = Date.now();
    const then = now + sec * 1000;
    displayTimeLeft(sec);
    displayBackAt(then);
    
    countdown = setInterval(() => {
        let secondsLeft = Math.round((then - Date.now()) / 1000);
        
        if (secondsLeft < 0) {
            // Check if we should stop it
            clearInterval(countdown);
            return;
        }

        displayTimeLeft(secondsLeft);
    }, 1000);
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    document.title = display;
    timeLeft.textContent = display;
}

function displayBackAt(timeStamp) {
    const backTime = new Date(timeStamp);
    const hour = backTime.getHours();
    const minute = backTime.getMinutes();
    const message = `Be Back At ${hour}:${minute}`;
    backAt.textContent = message;
}

function startTimer() {
    const time = parseInt(this.dataset.time);
    timerFunction(time);
}


// Buttons Listener
buttons.forEach(button => button.addEventListener('click', startTimer));


function startCustom(e) {
    e.preventDefault();
    const seconds = this.querySelector('input').value * 60;
    timerFunction(seconds);
}

// Form Listener
customTime.addEventListener('submit', startCustom);
