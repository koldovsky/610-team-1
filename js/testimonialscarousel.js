const slides = [
	'img/testimonials-people/tsm1.webp',
	'img/testimonials-people/tsm3.webp',
	'img/testimonials-people/tsm2.webp',
]

function showCurrentSlide() {
    const slideTarget = document.querySelector('.current-slide');
    slideTarget.src = slides[currentSlide];
}
let currentSlide = 0;

function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) currentSlide = 0;
    showCurrentSlide();
}

function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) currentSlide = slides.length - 1;
    showCurrentSlide();
}

document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

showCurrentSlide();
setInterval(nextSlide, 3000);

/*const carouseleTestimonials = document.querySelector("body > main > nav.testimonials-container > div.testimonials-elements");

const slides = [
	document.querySelector("body > main > nav.testimonials-container > div.testimonials-elements > div.person-one"),
	document.querySelector("body > main > nav.testimonials-container > div.testimonials-elements > div.person-two"),
	document.querySelector("body > main > nav.testimonials-container > div.testimonials-elements > div.person-three")   
]

let currentSlide = 0;

function showCurrentSlide () {
	const slidetarget = document.querySelector("body > main > nav.testimonials-container > div.testimonials-elements > div.person-one");
	slideTarget.src = slides[currentSlide];
}

function nextSlide () {
	currentSlide++;
	if (currentSlide >= slides.lenght) currentSlide = 0;
	showCurrentSlide();
}

function prevSlide () {
	currentSlide+--
	if (currentSlide < 0) currentSlide = slides.length - 1;
	showCurrentSlide();
}


document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

showCurrentSlide();*/
//setInterval(nextSlide, 3000);