const wrapper = document.querySelector('.wrapper');
const score = document.querySelector('.score');
const startBtn = wrapper.querySelector('.start');
const dificulty = wrapper.querySelector('#dificulty');
const moles = wrapper.querySelectorAll('#mole');
const time = wrapper.querySelector('#time');
let count;
let lastScore = 0;


function startGame() {
    score.innerHTML = '';
    clearInterval(count);
    let gameDuration = parseInt(time.value);
    const gameDificulty = parseInt(dificulty.value);

    count = setInterval(() => {
        gameDuration--;
        if (gameDuration === 0) {
            clearInterval(count);
        }
    }, 1000);

    showMole = setInterval(() => {
        if (gameDuration === 0) return;
        const index = randomNumber(0, 5);
        const mole = moles[index];
        mole.style.transform = `translateY(0px)`;
        setTimeout(() => {
            mole.style.transform = `translateY(100%)`;
        }, gameDificulty);
    }, gameDificulty);

}



function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}


function addScore(e) {
    lastScore++;
    score.innerHTML = lastScore;
    this.style.transform = 'translateY(100%)';
}

moles.forEach(mole => mole.addEventListener('click', addScore));
startBtn.addEventListener('click', startGame);