document.addEventListener("DOMContentLoaded", function () {

    const music = document.getElementById("bgMusic");
    const button = document.getElementById("musicBtn");

    if (!music || !button) {
        console.error("Audio element or music button not found.");
        return;
    }

    // Set starting volume
    music.volume = 0.45;

    // Play / Pause button
    button.addEventListener("click", function () {

        if (music.paused) {

            music.play()
                .then(function () {

                    button.textContent = "⏸ Pause Music";
                    button.classList.add("music-playing");

                })
                .catch(function (error) {

                    console.error("Audio could not play:", error);

                });

        } else {

            music.pause();

            button.textContent = "🎵 Play Music";
            button.classList.remove("music-playing");

        }

    });

    // When music ends
    music.addEventListener("ended", function () {

        button.textContent = "🎵 Play Music";
        button.classList.remove("music-playing");

    });

});