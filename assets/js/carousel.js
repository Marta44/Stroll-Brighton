/*CREDIT: to build this carousel I watched: https://www.youtube.com/watch?v=EG-sXgY1md4 
and Owl Carousel documentation: https://owlcarousel2.github.io/OwlCarousel2/docs/api-classes.html
*/
// Owl Carousel cards in tips section
$(document).ready(function() {
    $('.attractionSlider').owlCarousel({
        items: 3,
        margin: 10,
        nav: true,
        navText: ['<i class="fas fa-chevron-left" aria-label= "left arrow">', '<i class="fas fa-chevron-right" aria-label= "right arrow"></i>'],
        dotElement: ['<button role="button", aria-label="directional-dots"></button>'],
        autoplay: false,
        responsiveClass: true,
        responsive:{
            0:{
                items: 1,
                nav: true,
                dots: false,
            },
            480:{
                items: 2,
                nav:true,
                dots: false,
            },
            768:{
                items: 3,
                nav:true
            }
        }
    });
});