const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const body = document.querySelector('body');

let currentSlide = 1; // Start from the first slide

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
      // Change the background image based on the active slide's data-background
      const newBackground = slide.getAttribute('data-background');
      body.style.backgroundImage = `url('${newBackground}')`;
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length; // Loop to the first slide
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Loop to the last slide
  showSlide(currentSlide);
}

// Event listeners for the next and previous buttons
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// Auto-slide functionality (optional)
setInterval(nextSlide, 3000); // Change every 3 seconds

// Initialize the first slide and background on page load
showSlide(currentSlide);