// auto calculate next anniversary
const startDate = new Date("May 1, 2024 00:00:00");
const now = new Date();

// kalau tanggal udah lewat, ambil anniversary tahun depan
let targetYear = now.getFullYear();
const anniversary = new Date(`May 1, ${targetYear} 00:00:00`);
if (now > anniversary) targetYear += 1;
const targetDate = new Date(`May 1, ${targetYear} 00:00:00`).getTime();

const BACK_PATH = "../love-Game/lg.html";

// countdown
function updateCountdown() {
  const now = Date.now();
  const diff = targetDate - now;

  if (diff <= 0) {
    document.getElementById("countdown").innerHTML =
      "<h2>💞 Happy Anniversary, My Love! 💞</h2>";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
  document.getElementById("minutes").textContent = mins.toString().padStart(2, "0");
  document.getElementById("seconds").textContent = secs.toString().padStart(2, "0");
}
setInterval(updateCountdown, 1000);
updateCountdown();

// back transition
document.getElementById("backBtn").addEventListener("click", () => {
  document.body.style.transition = "opacity 0.8s ease";
  document.body.style.opacity = "0";
  setTimeout(() => (window.location.href = BACK_PATH), 800);
});

// music volume
const bgMusic = document.getElementById("bgMusic");
if (bgMusic) bgMusic.volume = 0.35;

// background hearts
const heartBg = document.getElementById("heartBg");
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = ["💗", "💖", "💕", "💞"][Math.floor(Math.random() * 4)];
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 12 + 12 + "px";
  heart.style.animationDuration = Math.random() * 4 + 4 + "s";
  heartBg.appendChild(heart);
  setTimeout(() => heart.remove(), 8000);
}
setInterval(createHeart, 400);