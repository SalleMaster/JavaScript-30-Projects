const controlInputs = document.querySelectorAll('.controls > input');



function handleChange(e) {
    console.log(this.sizing);
    const name = this.name;
    const value = this.value;
    const sizing = this.dataset.sizing;

    document.documentElement.style.setProperty(`--${name}`, `${value}${sizing}`);
}
 
controlInputs.forEach(input => input.addEventListener('mousemove', handleChange));

controlInputs.forEach(input => input.addEventListener('change', handleChange));