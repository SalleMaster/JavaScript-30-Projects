const hourPointer = document.querySelector('.hour');
const minutePointer = document.querySelector('.minute');
const secondPointer = document.querySelector('.second');




function time() {
    const now = new Date (Date.now());
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();

    const hourRotate = (360 / 12 * hour) + 90;
    const minuteRotate = (360 / 60 * minute) + 90;
    const secondRotate = (360 / 60 * second) + 90;
    

    hourPointer.style.transform = `rotate(${hourRotate}deg)`;
    minutePointer.style.transform = `rotate(${minuteRotate}deg)`;
    secondPointer.style.transform = `rotate(${secondRotate}deg)`;
    
}

setInterval(() => {
    time();
}, 1000);