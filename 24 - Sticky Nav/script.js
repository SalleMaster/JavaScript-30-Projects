// Navigation 
const navBar = document.querySelector('.main-nav');
const lostMenu = navBar.querySelector('.lost');
const navBarOffestTop = navBar.offsetTop;

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
        navBar.classList.add('fixed');
        article.style.position = 'absolute';
        // Original offsetTop - article top margin
        article.style.top = `${articleOffsetTop - 150}px`;
    } else {
        navBar.classList.remove('fixed');
        article.style.position = '';
        
    }

    // Handling Article Images


    
}




window.addEventListener('scroll', debounce(scrollFunction));
