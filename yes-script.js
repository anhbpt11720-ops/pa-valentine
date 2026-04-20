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

// Thử phát ngay khi load, nếu browser chặn thì chờ click đầu tiên
music.play().then(() => {
  musicStarted = true;
}).catch(() => {
  document.addEventListener("click", startMusicOnce, { once: true });
});

toggle.onclick = () => {
  if (music.paused) music.play();
  else music.pause();
};

// Confetti 6 seconds
const duration = 6000;
const end = Date.now() + duration;

(function frame() {
  confetti({
    particleCount: 5,
    spread: 70,
    origin: { y: 0.6 }
  });

  if (Date.now() < end) {
    requestAnimationFrame(frame);
  }
})();
