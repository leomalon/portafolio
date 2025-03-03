const targetText = "-> Bienvenido/a a mi portal";
const glitchElement = document.getElementById("linetext1");
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
let index = 0;
let blurTimeout = 600; 

const targetText2 = "-> Leonardo Malón Bazán";
const glitchElement2 = document.getElementById("linetext2");
let index2 = 0;
let blurTimeout2 = 800;

const targetText3 = "-> ingeniero civil y developer";
const glitchElement3 = document.getElementById("linetext3");
let index3 = 0;
let blurTimeout3 = 1200;

function glitchEffect() {
    glitchElement.style.opacity = 1;
    let randomText = "";
    for (let i = 0; i < targetText.length; i++) {
        randomText += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    glitchElement.textContent = randomText;

    if (index < targetText.length) {
        index++;
        setTimeout(glitchEffect,70);
    } else{
        revealText();
    }
}

function revealText() {
    let revealIndex = 0;
    let revealInterval = setInterval(() => {
        let partialText = targetText.substring(0, revealIndex);
        let randomText = "";

        for (let i = revealIndex; i < targetText.length; i++) {
            randomText += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        glitchElement.textContent = partialText + randomText;

        if (revealIndex >= targetText.length) {
            clearInterval(revealInterval);
            glitchElement.style.filter = "blur(0px)";
        }
        revealIndex++;
    }, 80);
}

function fadeBlur() {
    glitchElement.style.filter = "blur(0px)";
}

setTimeout(glitchEffect, 220);
setTimeout(fadeBlur, blurTimeout);

function glitchEffect1() {
    glitchElement2.style.opacity = 1;
    let randomText = "";
    for (let i = 0; i < targetText2.length; i++) {
        randomText += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    glitchElement2.textContent = randomText;

    if (index2 < targetText2.length) {
        index2++;
        setTimeout(glitchEffect1, 80);
    } else{
        revealText1();
    }
}

function revealText1() {
    let revealIndex1 = 0;
    let revealInterval = setInterval(() => {
        let partialText = targetText2.substring(0, revealIndex1);
        let randomText = "";
        for (let i = revealIndex1; i < targetText2.length; i++) {
            randomText += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        glitchElement2.textContent = partialText + randomText;

        if (revealIndex1 >= targetText2.length) {
            clearInterval(revealInterval);
            glitchElement2.style.filter = "blur(0px)";
        }
        revealIndex1++;
    }, 77);
}

function fadeBlur1() {
    glitchElement2.style.filter = "blur(0px)";
}

setTimeout(glitchEffect1, 420);
setTimeout(fadeBlur1, blurTimeout2);

function glitchEffect2() {
    glitchElement3.style.opacity = 1;
    let randomText = "";
    for (let i = 0; i < targetText3.length; i++) {
        randomText += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    glitchElement3.textContent = randomText;

    if (index3 < targetText3.length) {
        index3++;
        setTimeout(glitchEffect2, 75);
    } else{
        revealText2();
    }
}

function revealText2() {
    let revealIndex2 = 0;
    let revealInterval2 = setInterval(() => {
        let partialText = targetText3.substring(0, revealIndex2);
        let randomText = "";
        for (let i = revealIndex2; i < targetText3.length; i++) {
            randomText += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        glitchElement3.textContent = partialText + randomText;

        if (revealIndex2 >= targetText3.length) {
            clearInterval(revealInterval2);
            glitchElement3.style.filter = "blur(0px)";
        }
        revealIndex2++;
    }, 60);
    }

function fadeBlur2() {
    glitchElement3.style.filter = "blur(0px)";
}

setTimeout(glitchEffect2, 200);
setTimeout(fadeBlur2, blurTimeout3);


function startBlinkEffect(element, delay, onComplete) {
    let blinkCount = 8; // Number of blinks
    let isVisible = true;
    
    setTimeout(() => {
        let blinkInterval = setInterval(() => {
            element.style.opacity = isVisible ? "0" : "1";
            isVisible = !isVisible;
            blinkCount--;

            if (blinkCount === 0) {
                clearInterval(blinkInterval);
                element.style.opacity = "1"; // Ensure it remains visible
                if (onComplete) onComplete(); // Execute next step (fade out)
            }
        }, 280); // Speed of blinking (milliseconds)
    }, delay);
}

// **Trigger the blinking effect in sequence**
setTimeout(() => startBlinkEffect(glitchElement, 0, fadeOutText), 5000)

function fadeOutText() {
    let textContainer = document.getElementById("text-container");
    textContainer.style.transition = "opacity 2s ease-in-out"; 
    textContainer.style.opacity = 0;
}

setTimeout(fadeOutText, 8900); // Adjust timing after text is fully revealed


function startBlinkEffect1(elements) {
    elements.forEach((el, index) => {
        let isVisible = false;
        let count = 0;
        let blinkCount = Math.floor(Math.random() * 4) + 5; // Random blinks (5 to 8 times)
        let speed = Math.floor(Math.random() * 100) + 250;  // Random speed (250ms to 350ms)
        let delay = index * 150; // Staggered start times per element

        setTimeout(() => {
            let blinkInterval = setInterval(() => {
                el.style.opacity = isVisible ? "1" : "0";
                isVisible = !isVisible;
                count++;

                if (count >= blinkCount) {
                    clearInterval(blinkInterval);
                    el.style.opacity = "1"; // Ensure they stay visible
                }
            }, speed);
        }, delay);
    });
}

function showMainContent() {
    const elements = document.querySelectorAll(".section-description, #admin_description, #logo_container, #terminal-header, .square, .nav-container div, .image-slider");
    startBlinkEffect1(elements);
}

/* Trigger blinking after glitch text fades away */
setTimeout(showMainContent, 9000);

document.addEventListener("DOMContentLoaded", function () {
    const words = ["Empresarial", "Emprendedor", "Personal"];
    let index = 0;
    const spanElement = document.querySelector(".main-cyber");

    function changeText() {
        spanElement.style.opacity = 0; // Fade out
        setTimeout(() => {
            spanElement.textContent = words[index]; // Change text
            spanElement.style.opacity = 1; // Fade in
            index = (index + 1) % words.length; // Cycle through words
        }, 500); // Match transition duration
    }

    setInterval(changeText, 3000); // Change every 3 seconds
});


const modal = document.getElementById("videoModal");
const videoPlayer = document.getElementById("videoPlayer");
const videoSource = document.getElementById("videoSource");
const closeBtn = document.querySelector(".close1");

// Open modal with specific video
document.querySelectorAll(".openModal").forEach(button => {
    button.addEventListener("click", () => {
        const videoFile = button.getAttribute("data-video"); // Get video file from button
        videoSource.src = videoFile;
        videoPlayer.load(); // Reload video source
        videoPlayer.play(); // Autoplay video
        modal.style.display = "flex";
        modal.style.zIndex = 100;
    });
});

// Close modal
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    videoPlayer.pause(); // Pause video when closed
});

// Close modal when clicking outside the content
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
        videoPlayer.pause();
    }
});
