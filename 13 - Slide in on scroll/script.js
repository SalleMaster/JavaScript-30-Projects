const images = document.querySelectorAll('img');


// Debounce (delay) function
function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };


function handleScroll(e) {

        const scrollTop = e.pageY;
        const scrollBottom = e.pageY + window.innerHeight;

        images.forEach(image => {
            const imageHeight = image.height;
            const imageTop = image.offsetTop;
            const imageBottom = image.offsetTop + imageHeight;
            const imageMiddle = imageTop + imageHeight/2;

            if(scrollBottom > imageMiddle || scrollTop < imageMiddle) {
              image.classList.add('active');
            }

            if(scrollTop > imageBottom || scrollBottom < imageTop) {
              image.classList.remove('active');
            }
            console.log({imageHeight, imageBottom, imageTop, scrollBottom, scrollTop});
        })
        
 
}

window.addEventListener('scroll', debounce(handleScroll));
