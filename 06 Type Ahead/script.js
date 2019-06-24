const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const search = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');
const searchForm = document.querySelector('.city-input');


const cities = [];

<<<<<<< HEAD
const request = async () => {
    const response = await fetch(endpoint);
    const json = await response.json();
    console.log(json);
=======
fetch(endpoint)
    .then(response => response.json())
    .then(data => cities.push(...data));



function handleSearch(e) {
    const word = new RegExp(this.value, 'gi');
    const citiesMatch = cities.filter(city => city.city.match(word) || city.state.match(word));

    const html = citiesMatch.map(place => {
        return `
        <li>
        ${place.city}, ${place.state}
        </li>`
    }).join('');

    suggestions.innerHTML = html;
    
}


function handleSubmit(e) {
    e.preventDefault();
>>>>>>> 16b3ef6d82282a278806c84fe0d658bdd22f8cc3
}

search.addEventListener('keyup', handleSearch);
searchForm.addEventListener('submit', handleSubmit);