// SECTION SKILLS - CAROUSEL

const 	skillsCarousel = $('.skills__carousel'),
		skillsCarouselNav = $('.skills__carousel-nav');

skillsCarousel.owlCarousel({
	responsive: {
		0: {
			items: 1,
			dotsEach: 4
		},

		992: {
			items: 4
		}
	},
	loop: true,
	nav: true,
	dots: true,
	navClass: ['skills__carousel-nav-btn skills__carousel-nav-btn--prev', 'skills__carousel-nav-btn skills__carousel-nav-btn--next'],
	navText: ['<span class="skills__carousel-btn-span">Prev</span>', '<span class="skills__carousel-btn-span">Next</span>'],
	navContainer: $('.skills__carousel-nav'),
	dotsContainer: $('.skills__carousel-dots'),
	dotClass: ['skills__carousel-dots-circle']
});

// SECTION PROJECTS - CAROUSEL 

const 	projectsCarousel = $('.projects__list'),
	 	projectsCarouselNav = $('.projects__nav');

if($(window).width() < 992) {
	projectsCarousel.owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		dots: true,
		navClass: ['projects__nav-btn projects__nav-btn--prev', 'projects__nav-btn projects__nav-btn--next'],
		navText: ['<span class="projects__btn-span">Prev</span>', '<span class="projects__btn-span">Next</span>'],
		navContainer: $('.projects__nav'),
		dotsContainer: $('.projects__dots'),
		dotClass: ['projects__dots-circle']
	});
}

$('.owl-stage-outer').css('overflow', 'hidden');
$('.owl-stage').css('display', 'flex');