// TYPEWRITER FOR HOME PAGE
const texts = ["Dumzy will save us!","Stopping Global Warming.","Saving the Forests.", "Saving the Earth."];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if (count === texts.length) {
        count = 0; // Reset count if at the end of texts array
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.getElementById('typewriter').textContent = letter;
    
    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(() => type(), 1800); // Wait before erasing
    } else {
        setTimeout(() => type(), 100); // Typing speed
    }
})(); //END

// BACKGROUND SLIDER FOR HOMEPAGE
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function changeSlide() {
  slides[currentSlide].style.opacity = 0; // Hide the current slide
  currentSlide = (currentSlide + 1) % totalSlides; // Move to the next slide
  slides[currentSlide].style.opacity = 1; // Show the new slide
}
// Change slide every 5 seconds (5000 milliseconds)
setInterval(changeSlide, 3500);

//END