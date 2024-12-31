let backgroundMusic = new Audio("Assets/Audios/Menu music.mp3");
let hover = new Audio("Assets/Audios/hover.mp3");
let buttons = document.querySelectorAll(".img");
let dot = document.querySelector(".dot");
let outline = document.querySelector(".outline");
let options = document.querySelector(".options-button");
let board = document.querySelector(".o-board");
let closes = document.querySelector(".close");

options.addEventListener("click", ()=>{
    board.classList.add("bounce");
})

closes.addEventListener("click", ()=>{
    board.classList.add("remove");
})

// Custom cursor
window.addEventListener("mousemove", (e) => {
    let posX = e.clientX;
    let posY = e.clientY;
    dot.style.left = `${posX}px`;
    dot.style.top = `${posY}px`;
    outline.animate({ top: `${posY}px`, left: `${posX}px` }, { duration: 100, fill: "forwards" });
});

buttons.forEach((btn)=>{
    btn.addEventListener("mouseover", ()=>{
        hover.currentTime = 0;
        hover.play();
        console.log("btn");
        
    });
});

let player = document.querySelector(".musicPlayer");

let isPlaying = true;

backgroundMusic.loop = true;

player.addEventListener("click",()=>{
    if(isPlaying){
        backgroundMusic.pause();
        backgroundMusic.currentTime = 0;
        player.src = "Assets/Icons/musicoff.png";
        isPlaying = false;
    } else if(!isPlaying){
        backgroundMusic.play();
        player.src = "Assets/Icons/musicon.png";
        isPlaying = true;
    };
});

window.addEventListener("load", ()=>{
    backgroundMusic.play();
});