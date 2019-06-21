const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';


const cities = [];

const request = async () => {
    const response = await fetch(endpoint);
    const json = await response.json();
    return json;
}

let names = cities.map(data => data.city);