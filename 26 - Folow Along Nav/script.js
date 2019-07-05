const navigation = document.querySelectorAll('.nav-list > li');
const background = document.querySelector('.drop-background');


function activateDropdown() {
    const dropdown = this.querySelector('.dropdown');
    dropdown.classList.add('display');
    setTimeout(() => {
        if (dropdown.classList.contains('display')) {
            dropdown.classList.add('opacity');
        };
    }, 100);

    const rect = dropdown.getBoundingClientRect();
    const coords = {
        width: rect.width,
        height: rect.height,
        top: rect.top,
        left: rect.left,
    };
    
    background.classList.add('active');

    setTimeout(() => {
        background.style.width = `${coords.width}px`;
        background.style.height = `${coords.height}px`;
        background.style.top = `${coords.top}px`;
        background.style.left = `${coords.left}px`;
    }, 1);

    
}




function deactivateDropdown() {
    const dropdown = this.querySelector('.dropdown');
    dropdown.classList.remove('display', 'opacity');
    background.classList.remove('active');
}


navigation.forEach(nav => nav.addEventListener('mouseenter', activateDropdown));
navigation.forEach(nav => nav.addEventListener('mouseleave', deactivateDropdown));