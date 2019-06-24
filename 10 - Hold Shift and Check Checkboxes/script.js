const checkboxes  = document.querySelectorAll('.checklist-item input');
let lastChecked;



function handleCheck(e) {
    
    let inBetween = false;
    // if shift is down loop trough checkboxes
    if(e.shiftKey) {
        checkboxes.forEach(checkbox => {
            
            if(checkbox === lastChecked || checkbox === this) {
                inBetween = !inBetween;
            }

            if(inBetween) {
                checkbox.checked = true;
            }
        })
    }
    lastChecked = this;
}



checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));

