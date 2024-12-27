// All variables
let bucket = document.querySelector(".bucket-container");
let apple = document.querySelector(".fruit-container");
let scoreHeading = document.querySelector(".h1");
let backgroundMusic = new Audio("Cute background music [under 25MB].mp4");
let socreSound = new Audio("Score sound.mp4");
let dot = document.querySelector(".dot");
let outline = document.querySelector(".outline");
let score = 0;
let scoreUpdated = false;

// Custom cursor
window.addEventListener("mousemove", (e)=>{
    let posX = e.clientX;
    let posY = e.clientY;
    dot.style.left = `${posX}px`;
    dot.style.top = `${posY}px`;
    outline.animate({ top: `${posY}px`, left: `${posX}px` }, { duration: 100, fill: "forwards" });
});

// Loading background mucic
window.addEventListener("load", ()=>{
    backgroundMusic.play();
});

// Moving bucket right
document.addEventListener("keydown", (e)=>{
    if(e.key == "ArrowRight"){
        let bucketLeft = parseInt(window.getComputedStyle(bucket).getPropertyValue("left"));
        bucketLeft += 300;
        if(bucketLeft <= 1200){
            bucket.style.left = `${bucketLeft}px`;
        };
    };
});

// Moving bucket left
document.addEventListener("keydown", (e)=>{
    if(e.key == "ArrowLeft"){
        let bucketRight = parseInt(window.getComputedStyle(bucket).getPropertyValue("left"));
        bucketRight -= 300;
        if(bucketRight >= 0){
            bucket.style.left = `${bucketRight}px`;
        };
    };
});

// Generating random positions for apple
setInterval(function generateRandom(){
    let position = (Math.floor(Math.random()*5))*300;
    apple.style.left = `${position}px`;
}, 1000);

// Updating score when apple collides with bucket
setInterval(() => {
    let appleTop = parseInt(window.getComputedStyle(apple).getPropertyValue("top"));
    let appleLeft = parseInt(window.getComputedStyle(apple).getPropertyValue("left"));
    let bucketLeft = parseInt(window.getComputedStyle(bucket).getPropertyValue("left"));

    if(appleTop >= 510 && appleLeft == bucketLeft && !scoreUpdated){
        score++;
        scoreHeading.innerHTML = score;
        scoreUpdated = true;
        socreSound.currentTime = 0;
        socreSound.play();
    };
    if(appleTop < 510){
        scoreUpdated = false;
    };
}, 10);