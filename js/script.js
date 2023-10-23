const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const clouds = document.querySelector(".clouds");
const start = document.querySelector(".start");
const reload = document.querySelector(".reload");
const score = document.querySelector(".score");
let count = 0;


const jump = () => {
  if(!mario.classList.contains("jump")) {
    mario.classList.add("jump");
    
  }

  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);

  count++;
}



const loop = setInterval(() => {
  
  const pipePosition = pipe.offsetLeft;
  let marioBottom = +window.getComputedStyle(mario).bottom.replace("px", "");

  if(pipePosition <= 65 && pipePosition > 0 && marioBottom < 90) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioBottom}`;

    mario.src = "./assets/game-over.png";
    mario.style.width = "3em";
    mario.style.marginLeft = "50px";

    alert(`Game over! Seu score foi ${count}`);
    count = 0;

    clearInterval(loop);

    reload.classList.remove("hidden");
  }

  score.innerHTML = `<p>Score ${count}</p>`;

}, 10);


start.addEventListener("click", () => {
  start.classList.add("hidden");
  mario.classList.remove("hidden");
  pipe.classList.remove("hidden");
  score.classList.remove("hidden");
  clouds.classList.remove("hidden");
});

reload.addEventListener("click", () => {
  reload.classList.add("hidden");
  window.location.reload();
});


document.addEventListener("keydown", (e) => {
  if((e.code === "ArrowUp") || (e.code === "Space")) {
    jump();
  }
});

document.addEventListener("touchstart", jump);
