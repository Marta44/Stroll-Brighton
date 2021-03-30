/*CREDIT: to build this carousel I watched: https://www.youtube.com/watch?v=EG-sXgY1md4 
and Owl Carousel documentation: https://owlcarousel2.github.io/OwlCarousel2/docs/api-classes.html
*/
// Owl Carousel cards in tips section
$(document).ready(function(){
    $('.attractionSlider').owlCarousel({
        items: 3,
        margin: 10,
        nav: true,
        navText: ['<i class="fas fa-chevron-left">', '<i class="fas fa-chevron-right"></i>'],
        autoplay: false,
        responsiveClass: true,
        responsive:{
            0:{
                items: 1,
                nav: true
            },
            480:{
                items: 2,
                nav:true
            },
            768:{
                items: 3,
                nav:true
            }
        }
});
});