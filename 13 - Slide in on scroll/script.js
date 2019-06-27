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

            
            console.log({imageHeight, imageBottom, imageTop});
        })
        
 
}

window.addEventListener('scroll', debounce(handleScroll));
