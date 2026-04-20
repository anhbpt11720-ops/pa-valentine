const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const text = document.getElementById("text");
const gif = document.getElementById("gif");
const toast = document.getElementById("toast");

const music = document.getElementById("bgMusic");
const toggle = document.getElementById("musicToggle");

music.volume = 0.3;

let musicStarted = false;

function startMusicOnce() {
  if (!musicStarted) {
    musicStarted = true;
    music.play().catch(() => {});
  }
}

document.addEventListener("click", startMusicOnce);

toggle.onclick = () => {
  if (music.paused) music.play();
  else music.pause();
};

let noCount = 0;

const messages = [
  "Don't say no 😢",
  "Pleaseee 🥺",
  "I'm begging you 😭",
  "Think again 😣",
  "Last chance 😩"
];

const gifs = [
  "https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif",
  "https://media.giphy.com/media/3oz8xIsloV7zOmt81G/giphy.gif",
  "https://media.giphy.com/media/l378giAZgxPw3eO52/giphy.gif",
  "https://media.giphy.com/media/d2lcHJTG5Tscg/giphy.gif",
  "https://media.giphy.com/media/OPU6wzx8JrHna/giphy.gif"
];

noBtn.addEventListener("click", () => {
  noCount++;

  if (noCount <= 5) {
    text.innerText = messages[noCount - 1];
    gif.src = gifs[noCount - 1];

    yesBtn.style.transform = `scale(${1 + noCount * 0.2})`;
    noBtn.style.transform = `scale(${1 - noCount * 0.1})`;
  }

  if (noCount >= 5) {
    noBtn.addEventListener("mouseover", () => {
      noBtn.style.position = "absolute";
      noBtn.style.top = Math.random() * window.innerHeight + "px";
      noBtn.style.left = Math.random() * window.innerWidth + "px";
    });
  }
});

yesBtn.addEventListener("click", () => {
  window.location.href = "yes.html";
});