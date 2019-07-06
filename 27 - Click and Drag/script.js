const dragContainer = document.querySelector('.drag-container');
let startX;
let lastScroll = 0;

// Check if dragging
let dragging = false;
dragContainer.addEventListener('mouseleave',() => {
    dragging = false;
    lastScroll = dragContainer.scrollLeft;
    dragContainer.classList.remove('active');
});
dragContainer.addEventListener('mousedown',(e) => {
    dragging = true;
    startX = e.clientX;
    dragContainer.classList.add('active');
});
dragContainer.addEventListener('mouseup',() => {
    dragging = false;
    lastScroll = dragContainer.scrollLeft;
    dragContainer.classList.remove('active');
});

function drag(e) {
    if (!dragging) return;
    const walk = e.clientX - startX;
    dragContainer.scrollLeft = lastScroll - walk;
}

dragContainer.addEventListener('mousemove', drag);


// Prevent selecting text on whole body
const body = document.querySelector('body');

body.addEventListener('mousedown', (e) => {
    e.preventDefault(); // Prevent from selecting text witch will break dragging
})
