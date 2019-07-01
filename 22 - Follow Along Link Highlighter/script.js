const links = document.querySelectorAll('a');
const highlighter = document.querySelector('.highlight');


function activateHighlight(e) {
    const link = e.target;
    const linkData = {
        width: link.offsetWidth,
        height: link.offsetHeight,
        top: link.offsetTop,
        left: link.offsetLeft,
    }

    highlighter.style.width = `${linkData.width}px`;
    highlighter.style.height = `${linkData.height}px`;
    highlighter.style.top = `${linkData.top}px`;
    highlighter.style.left = `${linkData.left}px`;

    highlighter.classList.add('block');
    highlighter.classList.add('active');
    
}

links.forEach(link => link.addEventListener('mouseover', activateHighlight));
