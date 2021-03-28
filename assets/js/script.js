/* Credit: jQuery plugin developed by Jason D'Oyley
https://www.jqueryscript.net/zoom/zoom-image-scrolling.html
*/
var $window= $(window);
$(window).scroll(function(event){
    var scroll = $(window).scrollTop();
    $(".heroImg-container img").css ({
        width: (100 + scroll/5) + "%",
    });
});

// Carousel cards in tips section
$(document).ready(function(){
    $("#carouselArt").carousel();
    $(".carousel-control-prev").click(function(){
        $("#carouselArt").carousel("prev");
    });
    $(".carousel-control-next").click(function(){
        $("#carouselArt").carousel("next");
    });
});