// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const hornSelect = document.getElementById("horn-select");

  const audioElement = document.querySelector("audio.hidden")
  const volumeSelect = document.getElementById("volume");
  const volumeImg = document.querySelector('img[alt="Volume level 2"]');
  let currentVolume = 0.5;


  const jsConfetti = new JSConfetti();


  hornSelect.addEventListener("change", (event) => {
    const img = document.querySelector('img[alt="No image selected"]');
    
    if(event.target.value == 'air-horn') {
      img.src = "assets/images/air-horn.svg";
      audioElement.src = "assets/audio/air-horn.mp3";
    }
    else if(event.target.value == 'car-horn') {
      img.src = "assets/images/car-horn.svg";
      audioElement.src = "assets/audio/car-horn.mp3";
    }
    else if(event.target.value == 'party-horn') {
      img.src = "assets/images/party-horn.svg"
      audioElement.src = "assets/audio/party-horn.mp3";
    }

  });

  volumeSelect.addEventListener("input", (event) => {
    currentVolume = event.target.value;
    if (event.target.value == 0) {
      volumeImg.src = "assets/icons/volume-level-0.svg";
    }
    else if (event.target.value < 33) {
      volumeImg.src = "assets/icons/volume-level-1.svg";
    }
    else if (event.target.value < 67) {
      volumeImg.src = "assets/icons/volume-level-2.svg";
    }
    else {
      volumeImg.src = "assets/icons/volume-level-3.svg";
    }

  });

  document.querySelector('button').addEventListener("click", (event) => {

    if(hornSelect.value == 'party-horn') {
      jsConfetti.addConfetti();
    }
    audioElement.volume = currentVolume / 100;
    audioElement.play();

  });

}