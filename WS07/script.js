const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

const images = document.querySelectorAll(".gallery-item img");

images.forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
    });
});

lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
});