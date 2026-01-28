const fullscreenEmoji = document.getElementById("fullscreenEmoji");
const centerEmoji = document.getElementById("centerEmoji");
const clickMeText = document.getElementById("clickMeText");
const sorryContainer = document.getElementById("sorryContainer");
const sorryLeft = document.querySelector(".sorryText.left");
const sorryRight = document.querySelector(".sorryText.right");
const middleEmoji = document.getElementById("middleEmoji");
const feelHeartText = document.getElementById("feelHeartText");
const loveContainer = document.getElementById("loveContainer");
const bottomArea = document.getElementById("bottomArea");
const clickAgain = document.getElementById("clickAgain");
const finalText = document.getElementById("finalText");
const loveShave = document.getElementById("loveShave");
const music = document.getElementById("bgMusic");

// Step 1: Fullscreen emoji appear
fullscreenEmoji.style.display = "block";
// ❌ auto-play removed

// Step 2: After 4 sec, hide fullscreen emoji + show clickMe
setTimeout(() => {
  fullscreenEmoji.style.display = "none";
  centerEmoji.classList.remove("hidden");
}, 4000);

// Step 3: Click Me triggers Sorry 1–1,000,000 sequentially (smooth)
clickMeText.addEventListener("click", () => {
  centerEmoji.classList.add("hidden");
  sorryContainer.classList.remove("hidden");

  let count = 1;
  const maxCount = 1000000;
  const step = 500; // safe batch increment

  function updateSorry() {
    if (count > maxCount) {
      sorryContainer.classList.add("hidden");
      middleEmoji.classList.remove("hidden");
      return;
    }

    sorryLeft.innerText = `Sorry 😭 ${count}`;
    sorryRight.innerText = `Sorry 😭 ${count}`;
    count += step;
    requestAnimationFrame(updateSorry); // smooth & browser-friendly
  }

  updateSorry();
});

// Step 4: Middle emoji click → I LOVE YOU 1–1,000,000 sequentially + music
feelHeartText.addEventListener("click", () => {
  middleEmoji.classList.add("hidden");
  loveContainer.classList.remove("hidden");

  music.currentTime = 0;
  music.play();

  let count = 1;
  const maxCount = 1000000;
  const step = 500; // safe batch increment

  function updateLove() {
    if (count > maxCount) {
      loveContainer.classList.add("hidden");
      bottomArea.classList.remove("hidden");
      return;
    }

    loveContainer.innerText = `I LOVE YOU 💞💍😭 ${count}`;
    count += step;
    requestAnimationFrame(updateLove);
  }

  updateLove();
});

// Step 5: Bottom click → finalText + loveShave
clickAgain.addEventListener("click", () => {
  bottomArea.classList.add("hidden");
  finalText.classList.remove("hidden");
  loveShave.classList.remove("hidden");
});
