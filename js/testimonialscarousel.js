const carouselTestimonials = document.querySelector("body > main > nav.testimonials-container");

const slides = [
    
    
]

let currentSlide = 0;

function showCurrentSlide () {
	const slidetarget = document.querySelector ('.t-current-slide');
	slideTarget.src = slides[currentSlide];
}

function nextSlide () {
	currentSlide++;
	if (currentSlide >= slides.lenght) currentSlide = 0;
	showCurrentSlide();
}

function prevSlide () {
	currentSlide+--;
	if (currentSlide < 0) currentSlide = slides.length - 1;
	showCurrentSlide();
}


document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

showCurrentSlide();
//setInterval(nextSlide, 3000);