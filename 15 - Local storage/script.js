const menu = document.querySelector('.menu-wrapper');
const form = menu.querySelector('form');
const formText = form.querySelector('input[type=text]');
const tapasList = menu.querySelector('ul');
const clearBtn = menu.querySelector('.clear');

const tapas = JSON.parse(localStorage.getItem('tapas')) || [];
populateList(tapas, tapasList);


function handleSubmit(e) {
    e.preventDefault();
    const value = formText.value;
    const item = {
        value: value,
        done: false,
    }
    tapas.push(item)

    populateList(tapas, tapasList);

    localStorage.setItem('tapas', JSON.stringify(tapas));
    
    form.reset();
}

function populateList(items, itemsList) {
    const html = items.map((item, index) => {
        return `<li><input type='checkbox' data-index='${index}' ${item.done ? 'checked' : ''}></input>${item.value}</li>`
    }).join('');

    tapasList.innerHTML = html;
}


function toggleCheck(e) {
    if(!e.target.matches('input')) return // Return if it is not input
    const index = e.target.dataset.index;
    tapas[index].done = !tapas[index].done;
    localStorage.setItem('tapas', JSON.stringify(tapas));
}


function clearStorage() {
    localStorage.removeItem('tapas');
    tapasList.innerHTML = '';
}

form.addEventListener('submit', handleSubmit);
tapasList.addEventListener('click', toggleCheck);
clearBtn.addEventListener('click', clearStorage);
