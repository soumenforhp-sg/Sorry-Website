document.addEventListener("DOMContentLoaded", () => {

    const element = document.getElementById("typewriter");

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
    let typingSpeed = 45;
    let finished = false;

    // Cursor
    const cursor = document.createElement("span");
    cursor.textContent = "|";
    cursor.style.animation = "blinkCursor .8s infinite";

    function typeCharacter() {

        if (index < message.length) {

            const char = message.charAt(index);

            if (char === "\n") {
                element.innerHTML += "<br>";
            } else {
                element.innerHTML += char;
            }

            index++;

            // Slight pause after punctuation
            let delay = typingSpeed;

            if (char === "." || char === "," || char === "!") {
                delay = 180;
            }

            setTimeout(typeCharacter, delay);

        } else if (!finished) {

            finished = true;
            element.appendChild(cursor);

        }

    }

    // Start after loader animation
    setTimeout(typeCharacter, 2800);

});