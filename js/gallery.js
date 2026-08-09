document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".gallery-card");
    const images = document.querySelectorAll(".gallery-image");

    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");
    const imageCaption = document.getElementById("imageCaption");

    const closeButton = document.getElementById("closeLightbox");
    const prevButton = document.getElementById("prevImage");
    const nextButton = document.getElementById("nextImage");

    if (
        !lightbox ||
        !lightboxImage ||
        !imageCaption
    ) {
        return;
    }

    let currentIndex = 0;

    const galleryItems = [];

    images.forEach((img, index) => {

        const overlay = img.parentElement.querySelector(".gallery-overlay");

        let title = "";
        let description = "";

        if (overlay) {

            const heading = overlay.querySelector("h3");
            const paragraph = overlay.querySelector("p");

            title = heading ? heading.textContent : "";
            description = paragraph ? paragraph.textContent : "";

        }

        galleryItems.push({
            src: img.src,
            alt: img.alt,
            title,
            description
        });

        img.style.cursor = "pointer";

        img.addEventListener("click", () => {
            openLightbox(index);
        });

        const button =
            img.parentElement.querySelector(".view-btn");

        if (button) {

            button.addEventListener("click", (event) => {

                event.stopPropagation();

                openLightbox(index);

            });

        }

    });

    function openLightbox(index) {

        currentIndex = index;

        updateLightbox();

        lightbox.classList.add("active");

        document.body.style.overflow = "hidden";

    }

    function closeLightbox() {

        lightbox.classList.remove("active");

        document.body.style.overflow = "";

    }

    function updateLightbox() {

        const item = galleryItems[currentIndex];

        lightboxImage.src = item.src;

        lightboxImage.alt = item.alt;

        imageCaption.innerHTML = `
            <strong>${item.title}</strong><br><br>
            ${item.description}
        `;

    }

    function showNext() {

        currentIndex++;

        if (currentIndex >= galleryItems.length) {
            currentIndex = 0;
        }

        updateLightbox();

    }

    function showPrevious() {

        currentIndex--;

        if (currentIndex < 0) {
            currentIndex = galleryItems.length - 1;
        }

        updateLightbox();

    }

    if (nextButton) {

        nextButton.addEventListener("click", showNext);

    }

    if (prevButton) {

        prevButton.addEventListener("click", showPrevious);

    }

    if (closeButton) {

        closeButton.addEventListener("click", closeLightbox);

    }

    lightbox.addEventListener("click", (event) => {

        if (event.target === lightbox) {

            closeLightbox();

        }

    });

});

    /* ======================================
       KEYBOARD CONTROLS
    ====================================== */

    document.addEventListener("keydown", (event) => {

        if (!lightbox.classList.contains("active")) return;

        switch (event.key) {

            case "ArrowRight":
                showNext();
                break;

            case "ArrowLeft":
                showPrevious();
                break;

            case "Escape":
                closeLightbox();
                break;

        }

    /* ======================================
       TOUCH SWIPE SUPPORT
    ====================================== */

    let touchStartX = 0;
    let touchEndX = 0;

    lightbox.addEventListener("touchstart", (event) => {

        touchStartX = event.changedTouches[0].screenX;

    }, { passive: true });

    lightbox.addEventListener("touchend", (event) => {

        touchEndX = event.changedTouches[0].screenX;

        const distance = touchStartX - touchEndX;

        if (Math.abs(distance) < 50) return;

        if (distance > 0) {

            showNext();

        } else {

            showPrevious();

        }

    }, { passive: true });

    /* ======================================
       IMAGE PRELOADING
    ====================================== */

    function preload(index) {

        if (galleryItems.length === 0) return;

        const img = new Image();

        img.src = galleryItems[index].src;

    }

    const originalUpdate = updateLightbox;

    updateLightbox = function () {

        originalUpdate();

        preload((currentIndex + 1) % galleryItems.length);

        preload(
            (currentIndex - 1 + galleryItems.length)
            % galleryItems.length
        );

    };

    /* ======================================
       FADE TRANSITION
    ====================================== */

    const originalUpdateWithAnimation = updateLightbox;

    updateLightbox = function () {

        lightboxImage.style.opacity = "0";

        setTimeout(() => {

            originalUpdateWithAnimation();

            lightboxImage.style.opacity = "1";

        }, 150);

    };

    lightboxImage.style.transition = "opacity .3s ease";

    /* ======================================
       ACCESSIBILITY
    ====================================== */

    lightbox.setAttribute("role", "dialog");
    lightbox.setAttribute("aria-modal", "true");

    closeButton.setAttribute("aria-label", "Close gallery");
    prevButton.setAttribute("aria-label", "Previous image");
    nextButton.setAttribute("aria-label", "Next image");

    /* ======================================
       PRELOAD ALL IMAGES
    ====================================== */

    galleryItems.forEach(item => {

        const img = new Image();

        img.src = item.src;

    });

    console.log("📸 Gallery initialized successfully.");

});