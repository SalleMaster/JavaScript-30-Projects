// Basic setup for Canvas
const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.iineWidth = 100;

// ctx.globalCompositeOperation = 'multiply';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;


function initilaizeDrawing(e) {
    
    [lastX, lastY] = [e.clientX, e.clientY];
    isDrawing = true;
    
}

function cancelDrawing(e) {
    isDrawing = false;
    
}


function draw(e) {
    if(!isDrawing) return;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    // start from
    ctx.moveTo(lastX, lastY);
    // got to
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    [lastX, lastY] = [e.clientX, e.clientY];

    hue++;
    if(hue > 360) {
        hue = 0;
    }

    if(ctx.lineWidth > 100 || ctx.lineWidth <= 1) {
        
        direction = !direction;
    }

    if(direction) {
        ctx.lineWidth++;
    } else {
        ctx.lineWidth--;
    }
}


canvas.addEventListener('mousemove', draw);

canvas.addEventListener('mousedown', initilaizeDrawing);
canvas.addEventListener('mouseup', cancelDrawing);
canvas.addEventListener('mouseleave', cancelDrawing);
