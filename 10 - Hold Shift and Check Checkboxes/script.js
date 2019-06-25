const checkboxes = document.querySelectorAll('.checklist-item input');
let lastChecked;
function handleChecking(e) {
    let inBetween = false;

    if(e.shiftKey && lastChecked.checked) {
        checkboxes.forEach(checkbox => {
            if(checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
            }

            if(inBetween) {
                checkbox.checked = true;
            }
        })
    }



    lastChecked = this;
}


checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleChecking));
