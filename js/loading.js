document.addEventListener("DOMContentLoaded", () => {

    const progressFill = document.getElementById("progressFill");
    const loadingPercent = document.getElementById("loadingPercent");
    const loadingMessage = document.getElementById("loadingMessage");
    const particleContainer = document.getElementById("particles");

    const messages = [
        "Loading beautiful memories... ❤️",
        "Collecting every smile... 😊",
        "Preparing heartfelt words... 💌",
        "Adding flowers and hearts... 🌸",
        "Almost ready... 💖"
    ];

    let progress = 0;
    let messageIndex = 0;

    /* -----------------------------
       Floating Particles
    ------------------------------ */

    function createParticle() {

        if (!particleContainer) return;

        const symbols = [
            "❤️",
            "💖",
            "💕",
            "🌸",
            "✨",
            "🌹"
        ];

        const particle = document.createElement("div");

        particle.className = "particle";

        particle.innerHTML =
            symbols[Math.floor(Math.random() * symbols.length)];

        particle.style.left =
            Math.random() * 100 + "vw";

        particle.style.fontSize =
            (18 + Math.random() * 24) + "px";

        particle.style.animationDuration =
            (5 + Math.random() * 5) + "s";

        particleContainer.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 10000);
    }

    setInterval(createParticle, 350);

    /* -----------------------------
       Loading Animation
    ------------------------------ */

    const loader = setInterval(() => {

        progress++;

        if (progressFill)
            progressFill.style.width = progress + "%";

        if (loadingPercent)
            loadingPercent.textContent = progress + "%";

        if (
            progress % 20 === 0 &&
            loadingMessage
        ) {

            messageIndex++;

            if (messageIndex >= messages.length)
                messageIndex = messages.length - 1;

            loadingMessage.textContent =
                messages[messageIndex];

        }

        if (progress >= 100) {

            clearInterval(loader);

            if (loadingMessage)
                loadingMessage.innerHTML =
                    "Ready! ❤️";

            document.body.classList.add("fade-out");

            setTimeout(() => {

                window.location.href = "home.html";

            }, 900);

        }

    }, 45);

});