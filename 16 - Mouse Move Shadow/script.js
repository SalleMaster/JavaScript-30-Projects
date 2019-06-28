const header = document.querySelector('h2');


function handleShadow(e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const headerX = header.offsetLeft + header.offsetWidth / 2;
    const headerY = header.offsetTop + header.offsetHeight / 2;
    let shadowX = headerX - mouseX;
    let shadowY = headerY - mouseY;

    if(shadowX > 150) {
        shadowX = 150;
    }
    
    if(shadowX < -150) {
        shadowX = -150;
    }


    if(shadowY > 150) {
        shadowY = 150;
    }
    header.style.textShadow = `${shadowX}px ${shadowY}px 0 black`;
    console.log({shadowX, shadowY});
}
window.addEventListener('mousemove', handleShadow);
