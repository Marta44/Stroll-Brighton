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




