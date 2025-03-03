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
setTimeout(showMainContent, 100);



document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".container-options button");
    const contentDivs = document.querySelectorAll("[class^='container-examples']");

    // Set PB1 as the default selected option on page load
    const defaultButton = document.getElementById("PB1");
    defaultButton.classList.add("active");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            // Hide all content divs
            contentDivs.forEach(div => div.style.display = "none");

            // Show the corresponding content div
            const targetDiv = document.querySelector(`.container-examples-${button.id}`);
            if (targetDiv) {
                targetDiv.style.display = "contents";
            }

            // Remove 'active' class from all buttons and add it to the clicked one
            buttons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
        });
    });
});

