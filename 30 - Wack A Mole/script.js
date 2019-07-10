const wrapper = document.querySelector('.wrapper');
const score = document.querySelector('.score');
const startBtn = wrapper.querySelector('.start');
const dificulty = wrapper.querySelector('#dificulty');
const moles = wrapper.querySelectorAll('#mole');
const selectedTime = wrapper.querySelector('#time');
let count;
let lastScore = 0;
let lastMole;
let timeOut = false;




// Random number 
function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

// Random Mole
function getMole() {
    const mole = moles[randomNumber(0, moles.length)];
    // Check if it is not the same as the last one
    if (mole === lastMole) {
        return getMole()
    };

    lastMole = mole;

    return mole;
}

// Pop a Mole
function popMole() {
    const time = parseInt(dificulty.value);
    const mole = getMole();

    mole.style.transform = 'translateY(0)';

    setTimeout(() => {
        mole.style.transform = 'translateY(100%)';

        if (timeOut) {
            popMole();
        }
    }, time);
    
    
    
}

// Game duration countdown
function countdown() {
    const gameDuration = parseInt(selectedTime.value) * 1000; // Need to get miliseconds
    timeOut = true;
    
    setTimeout(() => {
        timeOut = false;
        
    }, gameDuration);
    
}

// Tracking Score
function wackMole(e) {
    if (!e.isTrusted) return;
    this.style.transform = 'translateY(100%)';
    lastScore++;
    score.innerHTML = lastScore;
}


// Starting Game
function startGame() {
    lastScore = 0;
    score.innerHTML = '0';

    countdown()

    popMole();
}

// Listeners
moles.forEach(mole => mole.addEventListener('click', wackMole));
startBtn.addEventListener('click', startGame);
