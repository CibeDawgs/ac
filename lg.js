const loading = document.getElementById("loading");
const game = document.getElementById("game");

setTimeout(() => {
  loading.classList.add("fade-out");
  setTimeout(() => {
    loading.classList.add("hidden");
    game.classList.remove("hidden");
    game.classList.add("show");
  }, 1200);
}, 2500); // durasi tampilan teks “Sabar dulu ya Biwaa sayanggg 💞”

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

yesBtn.addEventListener("click", () => {
  window.location.href = "../anniversary-countdown/ac.html";
});

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);
  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});