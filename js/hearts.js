document.addEventListener("DOMContentLoaded", () => {

    const container = document.getElementById("hearts-container");

    if (!container) return;

    const heartSymbols = [
        "❤",
        "💖",
        "💕",
        "💗",
        "💝",
        "💞"
    ];

    const colors = [
        "#ff4b91",
        "#ff6fa5",
        "#ff8ec8",
        "#ffffff",
        "#ffd6e7",
        "#ffc1d6"
    ];

    function random(min, max) {
        return Math.random() * (max - min) + min;
    }

    function createHeart() {

        const heart = document.createElement("div");

        heart.className = "heart";

        heart.textContent =
            heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

        const size = random(18, 42);

        heart.style.fontSize = size + "px";

        heart.style.left = random(0, 100) + "vw";

        heart.style.color =
            colors[Math.floor(Math.random() * colors.length)];

        const duration = random(6, 12);

        heart.style.animationDuration = duration + "s";

        heart.style.animationDelay = "0s";

        heart.style.opacity = random(0.5, 1);

        heart.style.filter =
            `drop-shadow(0 0 ${random(4,12)}px rgba(255,255,255,.6))`;

        container.appendChild(heart);

        // Gentle left/right drifting
        let direction = Math.random() < 0.5 ? -1 : 1;
        let offset = 0;

        const drift = setInterval(() => {

            offset += direction * random(0.3, 1.2);

            heart.style.transform =
                `translateX(${offset}px)`;

        }, 120);

        // Remove heart after animation
        setTimeout(() => {

            clearInterval(drift);

            if (heart.parentNode) {
                heart.parentNode.removeChild(heart);
            }

        }, duration * 1000);

    }

    // Initial hearts
    for (let i = 0; i < 12; i++) {
        setTimeout(createHeart, i * 250);
    }

    // Keep generating hearts
    setInterval(createHeart, 650);

});