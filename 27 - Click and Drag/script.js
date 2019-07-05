const dragContainer = document.querySelector('.drag-container');

// Check if dragging
let dragging = false;
dragContainer.addEventListener('mouseleave',() => {
    console.log('mouseleave');
    dragging = false;
});
dragContainer.addEventListener('mousedown',() => dragging = true);
dragContainer.addEventListener('mouseup',() => dragging = false);

function drag(e) {
    console.log(dragging);
    if (!dragging) return;
}

dragContainer.addEventListener('mousemove', drag);