// Navigation 
const navBar = document.querySelector('.main-nav');
const lostMenu = navBar.querySelector('.lost');
const navBarOffestTop = navBar.offsetTop;
const body = document.querySelector('body');
const separation = document.querySelector('.separation');

// Article
const article = document.querySelector('article');
const articleOffsetTop = article.offsetTop;

// Images
const images = document.querySelectorAll('img');

// Debounce (delay) function
function debounce(func, wait = 10, immediate = true) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};


function scrollFunction(e) {
    const scrollTop = e.pageY;
    const scrollBottom = e.pageY + window.innerHeight;
    
    // Handling Navigation Bar and Article
    if (scrollTop >= navBarOffestTop) {
        body.classList.add('fixed-nav');
        separation.style.height = '60px';
    } else {
        body.classList.remove('fixed-nav');
        separation.style.height = '0px';
    }
}


function imageSlideIn(e) {
    const scrollTop = e.pageY;
    const scrollBottom = e.pageY + window.innerHeight;


    images.forEach(image => {
        const imageRect = image.getBoundingClientRect();
        const imageTop = Math.floor(imageRect.top) + scrollTop;
        const imageBottom = imageTop + image.height;
        const imageMiddle = imageTop + (image.height / 2);

        if (scrollBottom >= imageMiddle) {
            image.classList.add('active');
        };

        if (scrollBottom < imageMiddle || scrollTop >= imageMiddle) {
            image.classList.remove('active');
        };
    })
}

window.addEventListener('scroll', scrollFunction);
window.addEventListener('scroll', debounce(imageSlideIn));
