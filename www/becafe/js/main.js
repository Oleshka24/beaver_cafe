// SECTION SKILLS - CAROUSEL

const 	skillsCarousel = $('.skills__carousel'),
		skillsCarouselNav = $('.skills__carousel-nav');

skillsCarousel.owlCarousel({
	responsive: {0: {items: 4}},
	loop: true,
	nav: true,
	dots: true,
	navClass: ['skills__carousel-nav-btn skills__carousel-nav-btn--prev', 'skills__carousel-nav-btn skills__carousel-nav-btn--next'],
	navText: ['<span class="skills__carousel-btn-span">Prev</span>', '<span class="skills__carousel-btn-span">Next</span>'],
	navContainer: $('.skills__carousel-nav'),
	dotsContainer: $('.skills__carousel-dots'),
	dotClass: ['skills__carousel-dots-circle']
});

skillsCarousel.find('.owl-stage-outer').css('overflow', 'hidden');
skillsCarousel.find('.owl-stage').css('display', 'flex');