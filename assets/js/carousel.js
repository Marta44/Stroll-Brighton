/*CREDIT: to build the carousels I watched: https://www.youtube.com/watch?v=EG-sXgY1md4 
and Owl Carousel documentation: https://owlcarousel2.github.io/OwlCarousel2/docs/api-classes.html
*/

// Owl Carousel cards in tips section
var attractionSlider = $("#attraction-slider");

$(document).ready(function() {
	attractionSlider.owlCarousel({
		items: 4,
		margin: 10,
		nav: true,
		navText: ['<i class="fas fa-chevron-left" aria-label= "left arrow">', '<i class="fas fa-chevron-right" aria-label= "right arrow"></i>'],
		dotElement: ['<button role="button" class="carousel-buttons" aria-controls="carousel" aria-label="directional-dots" aria-selected="true"></button>'],
		autoplay: false,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: true,
				dots: false,
			},
			480: {
				items: 2,
				nav: true,
				dots: false,
			},
			768: {
				items: 3,
				nav: true,
			},
			1024: {
				items: 4,
				nav: true,
			}
		}
	});

});