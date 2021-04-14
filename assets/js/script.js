/* Credit: jQuery plugin developed by Jason D'Oyley
https://www.jqueryscript.net/zoom/zoom-image-scrolling.html
*/

$(window).scroll(function(event){
    var scroll = $(window).scrollTop();
    $(".heroImg-container img").css ({
        width: (100 + scroll/5) + "%",
    });
});

// Toggle menu closes after the user clicks a link
$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});


