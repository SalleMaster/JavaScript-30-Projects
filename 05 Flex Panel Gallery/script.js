const panels = document.querySelectorAll('.panel');


function togglePanel(e) {
    this.classList.toggle('open');
};


function toggleActive(e) {
    if(e.propertyName === 'flex-grow') {
        this.classList.toggle('open-active');
    }
    console.log(e.propertyName);
}


panels.forEach(panel => panel.addEventListener('click', togglePanel));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
