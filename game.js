// All variables
let bucket = document.querySelector(".bucket-container");
let apple = document.querySelector(".fruit-container");
let banana = document.querySelector(".banana-container");
let pineapple = document.querySelector(".pineapple-container");
let grapes = document.querySelector(".grapes-container");
let coco = document.querySelector(".coco-container");
let cherry = document.querySelector(".cherry-container");
let berry = document.querySelector(".berry-container");
let melon = document.querySelector(".melon-container");
let orange = document.querySelector(".orange-container");
let scoreHeading = document.querySelector("h1");
let timeing = document.querySelector(".menu");
let backgroundMusic = new Audio("Assets/Audios/Cute background music [under 25MB].mp4");
let scoreSound = new Audio("Assets/Audios/Score sound.mp4");
let dot = document.querySelector(".dot");
let outline = document.querySelector(".outline");
let score = 0;
let timer = 60;
let stats = document.querySelector(".stats-container");

setInterval(()=>{
    if(timer>0){
        timer--;
        timeing.innerHTML = timer;
    }
    else{
        stats.classList.add("bounce");
    };
}, 1000)

// Object to track scoring status for each fruit
let scoreFlags = {
    apple: false,
    banana: false,
    pineapple: false,
    grapes: false,
    coco: false,
    cherry: false,
    berry: false,
    melon: false,
    orange: false,
};

// Custom cursor
window.addEventListener("mousemove", (e) => {
    let posX = e.clientX;
    let posY = e.clientY;
    dot.style.left = `${posX}px`;
    dot.style.top = `${posY}px`;
    outline.animate({ top: `${posY}px`, left: `${posX}px` }, { duration: 100, fill: "forwards" });
});

// Loading background music
window.addEventListener("load", () => {
    backgroundMusic.play();
});

// Moving bucket right
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
        let bucketLeft = parseInt(window.getComputedStyle(bucket).getPropertyValue("left"));
        bucketLeft += 300;
        if (bucketLeft <= 1200) {
            bucket.style.left = `${bucketLeft}px`;
        }
    }
});

// Moving bucket left
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
        let bucketLeft = parseInt(window.getComputedStyle(bucket).getPropertyValue("left"));
        bucketLeft -= 300;
        if (bucketLeft >= 0) {
            bucket.style.left = `${bucketLeft}px`;
        }
    }
});

// Resetting the position of a fruit after it completes its fall
function resetFruitPosition(fruit) {
    let position = Math.floor(Math.random() * 5) * 300;
    fruit.style.left = `${position}px`;
}

// Add event listeners for all fruits to reset position after each fall
apple.addEventListener("animationiteration", () => resetFruitPosition(apple));
banana.addEventListener("animationiteration", () => resetFruitPosition(banana));
pineapple.addEventListener("animationiteration", () => resetFruitPosition(pineapple));
grapes.addEventListener("animationiteration", () => resetFruitPosition(grapes));
coco.addEventListener("animationiteration", () => resetFruitPosition(coco));
cherry.addEventListener("animationiteration", () => resetFruitPosition(cherry));
berry.addEventListener("animationiteration", () => resetFruitPosition(berry));
melon.addEventListener("animationiteration", () => resetFruitPosition(melon));
orange.addEventListener("animationiteration", () => resetFruitPosition(orange));

// Function to check collision for a specific fruit
function checkCollision(fruit, fruitName) {
    let fruitTop = parseInt(window.getComputedStyle(fruit).getPropertyValue("top"));
    let fruitLeft = parseInt(window.getComputedStyle(fruit).getPropertyValue("left"));
    let bucketLeft = parseInt(window.getComputedStyle(bucket).getPropertyValue("left"));

    // Check if fruit is within the scoring area and hasn't been scored yet
    if (fruitTop >= 510 && fruitTop < 650 && fruitLeft === bucketLeft) {
        if (!scoreFlags[fruitName]) {
            score++;
            scoreHeading.innerHTML = score;
            scoreSound.currentTime = 0;
            scoreSound.play();
            scoreFlags[fruitName] = true;
        }
    } else if (fruitTop >= 650 || fruitTop < 510) {
        // Reset the score flag when fruit moves out of the scoring area
        scoreFlags[fruitName] = false;
    }
}

// Continuously check collisions for all fruits
setInterval(() => checkCollision(apple, "apple"), 10);
setInterval(() => checkCollision(banana, "banana"), 10);
setInterval(() => checkCollision(pineapple, "pineapple"), 10);
setInterval(() => checkCollision(grapes, "grapes"), 10);
setInterval(() => checkCollision(coco, "coco"), 10);
setInterval(() => checkCollision(cherry, "cherry"), 10);
setInterval(() => checkCollision(berry, "berry"), 10);
setInterval(() => checkCollision(melon, "melon"), 10);
setInterval(() => checkCollision(orange, "orange"), 10);