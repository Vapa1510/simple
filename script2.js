// Initialize the current slide index and get all carousel images
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;

// Function to show the slide based on the current index
function showSlide(index) {
    const offset = -index * 100; // Move the carousel images by 100% per slide
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

// Function to go to the next slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % totalImages; // Loop back to the first image after the last
    showSlide(currentIndex);
}

// Function to go to the previous slide
function prevSlide() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages; // Loop back to the last image from the first
    showSlide(currentIndex);
}

// Optional: Auto-slide functionality that changes image every 3 seconds
setInterval(nextSlide, 3000); // Change image every 3 seconds

// Event listeners for the manual navigation buttons (next and previous)
document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

// Function to add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 70, // Adjust the offset if necessary
            behavior: 'smooth'
        });
    });
});

// Adding animations to the parameter boxes for smoother hover effects
const parameters = document.querySelectorAll('.parameter');
parameters.forEach(parameter => {
    parameter.addEventListener('mouseenter', () => {
        parameter.style.transform = 'scale(1.05)'; // Slight scaling on hover
        parameter.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)'; // Adds shadow
    });

    parameter.addEventListener('mouseleave', () => {
        parameter.style.transform = 'scale(1)'; // Reset scaling
        parameter.style.boxShadow = '0 3px 10px rgba(0, 0, 0, 0.1)'; // Reset shadow
    });
});

// Optional: Add lazy loading to images (only loads when visible in viewport)
const lazyImages = document.querySelectorAll('img');
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.getAttribute('data-src'); // Load the image source
            observer.unobserve(img); // Stop observing after it has loaded
        }
    });
}, { threshold: 0.1 });

lazyImages.forEach(img => {
    observer.observe(img);
});
