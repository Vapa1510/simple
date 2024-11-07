// JavaScript to enable image carousel sliding
let currentIndex = 0;
const images = document.querySelector('.carousel-images');
const totalImages = images.children.length / 2; // Adjusted for repeated images

// Move to the next slide
function nextSlide() {
    currentIndex++;
    if (currentIndex >= totalImages) {
        currentIndex = 0;
    }
    updateCarousel();
}

// Move to the previous slide
function prevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = totalImages - 1;
    }
    updateCarousel();
}

// Update carousel position
function updateCarousel() {
    images.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Auto-slide functionality (optional)
setInterval(nextSlide, 3000); // Slide every 3 seconds
