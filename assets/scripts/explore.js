// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO


  const synth = window.speechSynthesis;
  let voices = [];
  let text = "";
  const voiceSelect = document.getElementById("voice-select");
  const textBox = document.querySelector("textarea");
  const talkButton = document.querySelector("button");

  function populateVoiceList() {
    voices = synth.getVoices();

    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }
    
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);

    }
  
  }

  populateVoiceList();

  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

    // updates text var whenever text box is updated
  textBox.addEventListener("input", (event) => {
    text = event.target.value;
  });

  //play text using voice selected
  talkButton.addEventListener("click", (event) => {
    event.preventDefault();

    const utterThis = new SpeechSynthesisUtterance(text);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");

    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }

    synth.speak(utterThis);

  });





}