const fsEmoji = document.getElementById("fullscreenEmoji");
const center = document.getElementById("centerEmoji");
const clickMe = document.getElementById("clickMe");
const sorryBox = document.getElementById("sorryContainer");
const sorryText = document.getElementById("sorryText");
const middle = document.getElementById("middleEmoji");
const feel = document.getElementById("feelHeart");
const loveBox = document.getElementById("loveContainer");
const again = document.getElementById("againEmoji");
const clickAgain = document.getElementById("clickAgain");
const final = document.getElementById("final");
const music = document.getElementById("music");

setTimeout(()=>{
  fsEmoji.classList.add("hidden");
  center.classList.remove("hidden");
},4000);

clickMe.onclick = ()=>{
  center.classList.add("hidden");
  sorryBox.classList.remove("hidden");

  let i=1;
  function run(){
    if(i>10000000){
      sorryBox.classList.add("hidden");
      middle.classList.remove("hidden");
      return;
    }
    sorryText.innerText=`Sorry 😭🥹 ${i}`;
    i+=5000;
    requestAnimationFrame(run);
  }
  run();
};

feel.onclick = ()=>{
  middle.classList.add("hidden");
  loveBox.classList.remove("hidden");
  music.play();

  let i=1;
  function love(){
    if(i>10000000){
      loveBox.classList.add("hidden");
      again.classList.remove("hidden");
      return;
    }
    loveBox.innerText=`I LOVE YOU 😭💞💍💗 ${i}`;
    i+=5000;
    requestAnimationFrame(love);
  }
  love();
};

clickAgain.onclick = ()=>{
  again.classList.add("hidden");
  final.classList.remove("hidden");
};
