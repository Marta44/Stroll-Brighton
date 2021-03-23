//CREDIT: Initialize Google map on your page by Eamonn Smyth 
function initMap(){
    const mapProperties = {
        zoom:7,
        center: new google.maps.LatLng(50.827930, -0.168749),
    };
    const map = new google.maps.Map(document.getElementById("map"), mapProperties);
}
/*CREDIT: Google Map Documentation
How to add a place autocomplete search widget: 
https://www.youtube.com/watch?v=c3MjU9E9buQ&t=98s
*/
var autocomplete;
var places;
function initAutocomplete(){
    autocomplete = new google.maps.places.autocomplete(
    document.getElementById("search-box"),
    {
        types: ["bar", "restaurant", "museum"],
        componentRestrictions: {"country": ["UK"]},
        fields: ["place_id", "geometry", "name"]
    });
    places = new google.maps.places.PlacesService(map);
    autocomplete.addListener("place_changed", placeSelected);
}
function placeSelected(){
    var place = autocomplete.getPlace();
    if (place.geometry){
        map.panTo(place.geometry.location);
        map.setZoom(10);
    } else {
        document.getElementById("search-box").placeholder = "Type a place";
    }
}
