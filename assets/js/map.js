/*CREDIT: Google Map Documentation
https://developers.google.com/maps/documentation/javascript/examples/places-searchbox
and
https://www.youtube.com/watch?v=c3MjU9E9buQ&t=98s
*/
function initAutocomplete(){
    const map = new google.maps.Map(document.getElementById("map"),
    {
        zoom:7,
        center: new google.maps.LatLng(50.827930, -0.168749),
    }
    );
// Create the search box and link it to the input field
const input = document.getElementById("search-box");
const searchBox = new google.maps.places.SearchBox(input);}
