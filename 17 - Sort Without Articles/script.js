const bandList = document.querySelector('#bands');
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];



function strip(bandName) {
    return bandName.replace(/^(a |the |an )/i, '');
}

const sortedList = bands.sort((band1, band2) => strip(band1) > strip(band2) ? 1 : -1);


bandList.innerHTML = sortedList.map(band => {
    return `<li>${band}</li>`
}).join('');
