const currentStreakDisplay = document.querySelector('#currentStreak');
const resetStreakBtn = document.querySelector('#resetStreakBtn');
const bestStreakDisplay = document.querySelector('#bestStreak');
const colorDisplay = document.querySelector('#colorDisplay');
const newRoundBtn = document.querySelector('#newRoundBtn');
const colorBoxes = document.querySelectorAll('.color-box');
const messageDisplay = document.querySelector('#message');
const easyBtn = document.querySelector('#easyBtn');
const hardBtn = document.querySelector('#hardBtn');
var username = document.querySelector('#userName');
const streak = document.querySelector('#streak');
const live1 = document.querySelector('#live1');
const live2 = document.querySelector('#live2');
const live3 = document.querySelector('#live3');
var Name = prompt("Enter your name:");

username.textContent = Name;
let colors = [];
let pickCorrectColor = "";
let currentStreak = 0;
let bestStreak = 0;
let num = 6;
var count1 = 1;

document.addEventListener("DOMContentLoaded", () => {
    loadBestStreak();
    startNewRound();
});

function loadBestStreak() {
    const stored = localStorage.getItem("highBestStreak");
    bestStreak = stored ? parseInt(stored) : 0;
    displayStreaks();
}

function displayStreaks() {
    currentStreakDisplay.textContent = currentStreak;
    bestStreakDisplay.textContent = bestStreak;
}

function randomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function generateColors(count) {
    return Array.from({ length: count }, () => randomRGB());
}

function startNewRound() {

    //2. "Streak!" Message When Streak ≥ 3
    //  when streak below 3
    if (currentStreak < 3) {
        streak.textContent = " ";
    }
    //<==============================>

    //5. Maintain font weight default 
    if (currentStreak < bestStreak) {
        colorDisplay.style.fontWeight = "100";
    }
    //<==============================>

    restorelives();
    colors = generateColors(num);
    pickCorrectColor = colors[Math.floor(Math.random() * colors.length)];
    colorDisplay.textContent = pickCorrectColor;
    colorBoxes.forEach((box, index) => {
        if (colors[index]) {
            box.style.display = "block";
            box.style.backgroundColor = colors[index];
            box.style.pointerEvents = "auto";

        } else {
            box.style.display = "none";
        }
    });
}

function handleGuess(e) {
    const clickedColor = e.target.style.backgroundColor;
    const clickedBox = e.currentTarget;
    if (clickedColor === pickCorrectColor) {

        //4. Show "First Win!" on First Correct Answer
        if (currentStreak === 0) {
            messageDisplay.textContent = "🎉First Win!🎉";
        }
        //<==============================>

        else {
            messageDisplay.textContent = "✅ Correct!";
        }

        //1. Correct Color Glows When Clicked
        clickedBox.style.border = "5px solid yellow";
        setTimeout(() => {
            clickedBox.style.border = "none";
        }, 1000);
        //<==============================>

        //2. "Streak!" Message When Streak ≥ 3
        //   color change to green    
        currentStreak++;
        if (currentStreak >= 3) {
            streak.style.color = "green"
            streak.textContent = `🤩"STREAK!"🤩`;
        }
        //<==============================>

        if (currentStreak > bestStreak) {
            bestStreak = currentStreak;
            localStorage.setItem("highBestStreak", bestStreak);

            //5. Header Text Becomes Bold on New Best Streak
            colorDisplay.style.fontWeight = "900";
            //<==============================>
        }
        startNewRound();
        displayStreaks();

    } else {
        messageDisplay.textContent = "❌ Try Again";
        clickedBox.style.animation = 'shake 0.45s cubic-bezier(.36,.07,.19,.97)';
        setTimeout(function(){
            clickedBox.style.animation = 'none';
        },1000);
        livesStatus();
    }
}

function restorelives() {
    count1 = 1;
    live1.style.display = "block";
    live2.style.display = "block";
    live3.style.display = "block";
}
function plusOne() {
    if (count1 === 2) {
        live2.style.display = "block";
        count1++;
    }
    else if (count1 === 3) {
        live3.style.display = "block";
        count1++;
    }
}

function livesStatus() {
    if (count1 === 1) {
        live1.style.display = "none";
    } else if (count1 === 2) {
        live2.style.display = "none";
    } else if (count1 === 3) {
        live3.style.display = "none";
        messageDisplay.textContent = "❌ You Lost";
        disableColorClicks()
    }
    count1++;
}

function disableColorClicks() {
    colorBoxes.forEach(box => {
        box.style.pointerEvents = "none";
    });
}

colorBoxes.forEach(box => {
    box.addEventListener("click", handleGuess);
});

newRoundBtn.addEventListener("click", () => {
    currentStreak = 0;
    displayStreaks();
    startNewRound();
});

resetStreakBtn.addEventListener("click", () => {
    bestStreak = 0;
    localStorage.removeItem("highBestStreak");
    displayStreaks();
});

easyBtn.addEventListener("click", () => {
    num = 3;
    currentStreak = 0;
    displayStreaks();
    //3. Easy Mode Button Turns Green When Selected
    easyBtn.style.backgroundColor = 'lightgreen';
    //<==============================>               
    hardBtn.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    startNewRound();
});

hardBtn.addEventListener("click", () => {
    num = 6;
    currentStreak = 0;
    easyBtn.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    //3. Easy Mode Button Turns Green When Selected
    hardBtn.style.backgroundColor = 'red';
    //<==============================>              
    displayStreaks();
    startNewRound();
});