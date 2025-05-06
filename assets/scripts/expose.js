// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const hornSelect = document.getElementById("horn-select");

  const audioSelect = document.getElementsById("audio.hidden");
  const volumeSelect = document.getElementById("volume");
  const volumeImg = document.querySelector('img[alt="Volume level 2"]');
  let volumeValue;

  hornSelect.addEventListener("change", (event) => {
    const img = document.querySelector('img[alt="No image selected"]');
    
    if(event.target.value == 'air-horn') {
      img.src = "assets/images/air-horn.svg";
      audioSelect.src = "assets/audio/air-horn.mp3";
    }
    else if(event.target.value == 'car-horn') {
      img.src = "assets/images/car-horn.svg";
      audioSelect.src = "assets/audio/car-horn.mp3";
    }
    else if(event.target.value == 'party-horn') {
      img.src = "assets/images/party-horn.svg"
      audioSelect.src = "assets/audio/party-horn.mp3";
    }

  });

  volumeSelect.addEventListener("change", (event) => {
    volumeValue = event.target.value;
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
    if(event.target.value == 'party-horn') {
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
    }
    audioSelect.volume = volumeValue / 100;
    audioSelect.play();
    console.log(audioSelect.src);

  });

}