(function() {

    const slides = [
        `<div class="slide-honey">
      <img class="img-carousel-one" src="img/img-ann/icon-clover-honey.svg" alt="icon-clover-honey">
      <h4>Clover Honey</h4>
      <p class="text-carusel-one">Thick honey is produced by honeybees that collect the nectar of clover plants. Mild in taste and light in color. </p>
      <a href="#store" class="button-outline-button">Shop Now</a>
  </div>`,
  `<div class="slide-honey">
      <img class="img-carousel-one" src="img/img-ann/icon-buckwheat-honey.svg" alt="icon-buckwheat-honey">
      <h4>Buckwheat Honey</h4>
      <p class="text-carusel-one">It is highly nutritious amber-colored honey with a slight reddish tint. It has a has a pleasant sweet taste. </p>
      <a href="#store" class="button-outline-button">Shop Now</a>
  </div>`,
  `<div class="slide-honey">
      <img class="img-carousel-one" src="img/img-ann/icon-wildflower-honey.svg" alt="icon-wildflower-honey">
      <h4>Wildflower Honey</h4>
      <p class="text-carusel-one">It is also known as polyfloral honey. It is made from the nectar of different species of flowers or blossoms. </p>
      <a href="#store" class="button-outline-button">Shop Now</a>
  </div>`,
  `<div class="slide-honey">
      <img class="img-carousel-one"  src="img/img-ann/icon-blossom-honey.svg" alt="icon-blossom-hone">
      <h4>Citrus Blossom Honey</h4>
      <p class="text-carusel-one">This honey is sweet and relatively thick, a perfect match for your tea or toast. It is the best association with California! </p>
      <a href="#store" class="button-outline-button">Shop Now</a>
  </div>`
];
  
let firstSlide = 1;
	let slidesToShow = 2;
  
	function showCurrentSlide() {
	  const slidesContainer = document.querySelector('.slides');
	  let slideIdx = firstSlide;
	  let html = '';
	  for (let i = 1; i <= slidesToShow; i++) {
		html += slides[slideIdx];
		slideIdx = slideIdx + 1 >= slides.length ? 0 : slideIdx + 1;
	  }
	  slidesContainer.innerHTML = html;
	}
  
	function nextSlide() {
	  firstSlide = firstSlide + 1 >= slides.length ? 0 : firstSlide + 1;
	  showCurrentSlide();
	}

	function prevSlide() {
		firstSlide = firstSlide - 1 > 0 ? 0 : firstSlide + 1;
		showCurrentSlide();
	  }
  
	//setInterval(nextSlide, 0);
  
	function resize() {
	  console.log(window.screen.width);
	  if (window.screen.width <= 500) {
		slidesToShow = 1;
	  } else {
		slidesToShow = 2;
	  }
	  showCurrentSlide();
	}
   
	window.addEventListener('resize', resize);
	
	document.querySelector('.next').addEventListener('click', nextSlide);
	document.querySelector('.prev').addEventListener('click', prevSlide);
  
  })();
