document.addEventListener("DOMContentLoaded", () => {

    const loader = document.getElementById("loader");

    // Prevent scrolling while loading
    document.body.style.overflow = "hidden";

    // Minimum loading time (2.5 seconds)
    const MIN_LOADING_TIME = 2500;

    const startTime = Date.now();

    function hideLoader() {

        const elapsed = Date.now() - startTime;
        const remaining = Math.max(0, MIN_LOADING_TIME - elapsed);

        setTimeout(() => {

            if (!loader) {
                document.body.style.overflow = "";
                return;
            }

            // Fade out
            loader.style.opacity = "0";
            loader.style.visibility = "hidden";
            loader.style.pointerEvents = "none";

            // Remove after animation
            setTimeout(() => {

                loader.remove();

                document.body.style.overflow = "";

                document.body.classList.add("fade-in");

            }, 900);

        }, remaining);
    }

    // Wait until the page is fully loaded
    window.addEventListener("load", hideLoader);

    // Fallback in case load never fires
    setTimeout(hideLoader, 5000);

});