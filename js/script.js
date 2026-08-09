document.addEventListener("DOMContentLoaded", () => {

    /* ======================================
       Floating Flower Petals
    ====================================== */

    const PETAL_SYMBOLS = ["🌸", "🌺", "🌼", "🌹"];

    function random(min, max) {
        return Math.random() * (max - min) + min;
    }

    function createPetal() {

        const petal = document.createElement("div");

        petal.className = "petal";

        petal.textContent =
            PETAL_SYMBOLS[
                Math.floor(Math.random() * PETAL_SYMBOLS.length)
            ];

        petal.style.left = random(0, 100) + "vw";

        petal.style.fontSize = random(18, 34) + "px";

        petal.style.animationDuration =
            random(7, 12) + "s";

        document.body.appendChild(petal);

        setTimeout(() => {
            petal.remove();
        }, 13000);

    }

    setInterval(createPetal, 900);



    /* ======================================
       Decorative Stars
    ====================================== */

    function createStars() {

        for (let i = 0; i < 35; i++) {

            const star = document.createElement("div");

            star.className = "star";

            star.style.left = Math.random() * 100 + "vw";

            star.style.top = Math.random() * 100 + "vh";

            star.style.animationDelay =
                (Math.random() * 3) + "s";

            document.body.appendChild(star);

        }

    }

    createStars();



    /* ======================================
       Fade In Sections
    ====================================== */

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("fade-in");

                observer.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.2
    });

    document.querySelectorAll(
        ".glass-card, .profile, footer"
    ).forEach(item => observer.observe(item));



    /* ======================================
       Button Click Ripple
    ====================================== */

    document.querySelectorAll(".buttons button")
        .forEach(button => {

            button.addEventListener("click", function (e) {

                const ripple =
                    document.createElement("span");

                ripple.className = "ripple";

                const rect =
                    this.getBoundingClientRect();

                ripple.style.left =
                    (e.clientX - rect.left) + "px";

                ripple.style.top =
                    (e.clientY - rect.top) + "px";

                this.appendChild(ripple);

                setTimeout(() => {
                    ripple.remove();
                }, 700);

            });

        });



    /* ======================================
       Random Title Glow
    ====================================== */

    const title = document.querySelector(".title");

    if (title) {

        setInterval(() => {

            title.classList.add("glow");

            setTimeout(() => {

                title.classList.remove("glow");

            }, 1200);

        }, 6000);

    }



    /* ======================================
       Page Loaded
    ====================================== */

    console.log(
        "❤️ Premium Apology Website Loaded Successfully"
    );

});