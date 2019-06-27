const pressed = [];
const secretCode = 'salle';


function handleKeyup(e) {
    
    const key = e.key;
    pressed.push(key);
    const string = (pressed.slice(-secretCode.length)).join('');
    if(string === secretCode) {
        cornify_add();
    };
}

window.addEventListener('keyup', handleKeyup);
