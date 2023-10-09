const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.count');
const score = document.querySelector('.score');
const currentCount = document.querySelector('.count');
const start = document.querySelector('.start');
const reload = document.querySelector(".reload");
let alreadyJump = false;
let currentScore = 0;

start.addEventListener('click', (e) => {
  e.preventDefault();
  mario.classList.remove("hidden");
  pipe.classList.remove("hidden");
  clouds.classList.remove("hidden");
  score.classList.remove("hidden");
  start.classList.add("hidden");
  document.addEventListener('keydown', (e) => {
    if(e.code === "ArrowUp" || e.code === "Space") {
      jump();
    }
  });

  const watch = setInterval(() => {
    currentScore++;
    currentCount.textContent = currentScore;
    }, 1000);

  const loop = setInterval(() => {
  
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "");
  
    if(pipePosition <= 75  && pipePosition > 0 && marioPosition < 80) {
      reload.classList.remove("hidden");
      pipe.style.animation = "none";
      pipe.style.left = `${pipePosition}px`;
  
      mario.style.animation = "none";
      mario.style.bottom = `${marioPosition}px`;
  
      mario.src = "./assets/game-over.png";
      mario.style.width = "40px";
      mario.style.marginLeft = "50px";
      clearInterval(watch);
      clearInterval(loop);
    }

  if(currentScore > 10) {
    pipe.style.animationDuration = "1s";
  }
  
  }, 10);
});

reload.addEventListener('click', (e) => {
  bestScore = currentScore;
  currentScore = 0;
  window.location.reload();

})

const jump = () => {
  if(!mario.classList.contains('jump')) {
    mario.classList.add('jump');
    alreadyJump = true;
  }

  setTimeout(() => {
    mario.classList.remove('jump');
    alreadyJump = false;
  }, 500);
  
}
