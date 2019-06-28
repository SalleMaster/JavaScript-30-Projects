const header = document.querySelector('h2');
const walk = 500;


function handleShadow(e) {
    // Mouse coordinates
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Header middle coordinates
    const headerX = header.offsetLeft + header.offsetWidth / 2;
    const headerY = header.offsetTop + header.offsetHeight / 2;

    // Coords for shadow
    let shadowX = (headerX - mouseX);
    let shadowY = (headerY - mouseY);
    

    
    header.style.textShadow =  `
    ${shadowX}px ${shadowY}px 0 lightgreen,
    ${shadowX * -1}px ${shadowY}px 0 aqua,
    ${shadowX}px ${shadowY * -1}px 0 pink
  `;
    
}


window.addEventListener('mousemove', handleShadow);
