document.addEventListener("DOMContentLoaded", () => {

    const element = document.getElementById("typewriter");
    const typingSound = document.getElementById("typingSound");

    if (!element) return;

    const message = `Dear Best Friend ❤️

I know I made mistakes, and I'm truly sorry.

Hurting someone who means so much to me was never my intention.

Every laugh, every memory, and every moment we shared is precious to me.

I miss your smile, your kindness, and the happiness you bring into my life.

If I could go back in time, I would change the moment that hurt you.

I can't erase the past, but I promise to learn from it and become a better friend.

Thank you for every beautiful memory we've created together.

No matter what happens, you'll always have a special place in my heart.

Please forgive me... 💖`;

    let index = 0;
    const typingSpeed = 45;
    let finished = false;
    let soundStarted = false;

    // ==========================================
    // CURSOR
    // ==========================================

    const cursor = document.createElement("span");

    cursor.textContent = "|";
    cursor.style.animation = "blinkCursor .8s infinite";


    // ==========================================
    // START TYPING SOUND
    // ==========================================

    function startTypingSound() {

        if (!typingSound || soundStarted) return;

        soundStarted = true;

        typingSound.currentTime = 0;

        const playPromise = typingSound.play();

        if (playPromise !== undefined) {

            playPromise
                .then(() => {

                    console.log("Typing sound started.");

                })
                .catch(() => {

                    /*
                     * Browser blocked autoplay.
                     *
                     * The sound will automatically try again
                     * after the user's first interaction.
                     */

                    soundStarted = false;

                });

        }
    }


    // ==========================================
    // STOP TYPING SOUND
    // ==========================================

    function stopTypingSound() {

        if (!typingSound) return;

        typingSound.pause();
        typingSound.currentTime = 0;

        soundStarted = false;
    }


    // ==========================================
    // RETRY AUDIO AFTER USER INTERACTION
    // ==========================================

    function retryTypingSound() {

        if (finished || soundStarted) return;

        startTypingSound();
    }


    // ==========================================
    // TYPE CHARACTER
    // ==========================================

    function typeCharacter() {

        // ------------------------------------------
        // Start sound at the same time typing starts
        // ------------------------------------------

        if (index === 0) {
            startTypingSound();
        }


        // ------------------------------------------
        // Continue typing
        // ------------------------------------------

        if (index < message.length) {

            const char = message.charAt(index);

            if (char === "\n") {

                element.innerHTML += "<br>";

            } else {

                element.innerHTML += char;

            }

            index++;


            // --------------------------------------
            // Slight pause after punctuation
            // --------------------------------------

            let delay = typingSpeed;

            if (
                char === "." ||
                char === "," ||
                char === "!" ||
                char === "?"
            ) {

                delay = 180;

            }


            setTimeout(typeCharacter, delay);

        } else if (!finished) {

            // --------------------------------------
            // TEXT COMPLETELY FINISHED
            // --------------------------------------

            finished = true;

            element.appendChild(cursor);

            // Stop sound exactly when typing ends
            stopTypingSound();

        }

    }


    // ==========================================
    // BROWSER AUTOPLAY FALLBACK
    // ==========================================

    document.addEventListener(
        "click",
        retryTypingSound,
        { once: true }
    );

    document.addEventListener(
        "touchstart",
        retryTypingSound,
        { once: true }
    );

    document.addEventListener(
        "keydown",
        retryTypingSound,
        { once: true }
    );


    // ==========================================
    // START AFTER LOADING SCREEN
    // ==========================================

    setTimeout(() => {

        typeCharacter();

    }, 2800);

});