const synth = window.speechSynthesis;
const voiceSelector = document.querySelector('#voices');
const options = document.querySelectorAll('[type=range]');
const pitch = document.querySelector('#pitch');
const rate = document.querySelector('#rate');
const textarea = document.querySelector('textarea');
const buttons = document.querySelectorAll('button');


// Get all english voices
let voices = [];
function populateVoiceSelector() {
    voices = synth.getVoices();

    voiceSelector.innerHTML = voices
        .filter(voice => voice.lang.includes('en'))
        .map(voice => `<option value="${voice.voiceURI}">${voice.name}</option>`)
        .join('');
}

populateVoiceSelector();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceSelector;
}

// Set Synth
function setVoice() {
    const utterThis = new SpeechSynthesisUtterance(textarea.value);
    const voice = voices.find(voice => voice.voiceURI === voiceSelector.value);
    utterThis.voice = voice;
    utterThis.pitch = pitch.value;
    utterThis.rate = rate.value;

    return utterThis;
}


// voiceSelector.addEventListener('change', setVoice);

// Making buttons work
function toggleSpeak(e) {
    if (e.target.id === 'speak') {
        synth.speak(setVoice());
    } else {
        synth.cancel();
    }
}


buttons.forEach(button => button.addEventListener('click', toggleSpeak));


// Animate Buttons

function buttonsActiveToggle(e) {
    if (e.type === 'mousedown') {
        this.classList.add('active');
    } else {
        this.classList.remove('active');
    }
};

buttons.forEach(button => button.addEventListener('mousedown', buttonsActiveToggle));
buttons.forEach(button => button.addEventListener('mouseup', buttonsActiveToggle));
