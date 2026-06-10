const flipBtn = document.getElementById("flip-btn");
const coin = document.getElementById("coin");
const result = document.getElementById("result");

let isFlipping = false;

flipBtn.addEventListener("click", () => {
  if (isFlipping) return;

  isFlipping = true;
  flipBtn.disabled = true;
  result.textContent = "Flipping...";

  coin.classList.remove("coin--heads", "coin--tails");
  coin.classList.add("coin--flipping");

  const outcome = Math.random() < 0.5 ? "heads" : "tails";
  const endRotation = outcome === "heads" ? 1800 : 1980;
  coin.style.setProperty("--end-rotation", `${endRotation}deg`);

  window.setTimeout(() => {
    coin.classList.remove("coin--flipping");
    coin.classList.add(outcome === "heads" ? "coin--heads" : "coin--tails");
    coin.style.removeProperty("--end-rotation");

    result.textContent = outcome === "heads" ? "Heads!" : "Tails!";
    flipBtn.disabled = false;
    isFlipping = false;
  }, 800);
});
