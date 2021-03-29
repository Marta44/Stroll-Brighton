/*CREDIT: Google Map Documentation
https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete
and
https://www.youtube.com/watch?v=c3MjU9E9buQ&t=98s
*/
var autocomplete=null;
var map= null;
let generalMarkers = [];
// Set the map limited to Brighton (uk)
function initAutocomplete(){
    map = new google.maps.Map(document.getElementById("map"),
    {
        zoom:14,
        center: new google.maps.LatLng(50.8211196,-0.1404786),
    }
    );
    const options = {
    componentRestrictions: {country: "gb"},
    origin: map.getCenter(),
    strictBounds: true,
    };

// Create the autocomplete search box and link it to the input field
    const input = document.getElementById("search-box");
    autocomplete = new google.maps.places.Autocomplete(input, options);

// Bias the autocomplete results towards current map's viewport
    autocomplete.bindTo("bounds", map);

// Listen for the event fired when the user selects a prediction
    autocomplete.addListener("place_changed", displayPlace); 
}

function displayPlace() {
    const place = autocomplete.getPlace();
    if (!place.geometry || !place.geometry.location) {
      // User entered the name of a Place that was not suggested and
      // pressed the Enter key, or the Place Details request failed.
      window.alert("No details available for input: '" + place.name + "'");
      return;
    }

// For each place, get the icon, name and location
    const icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25),
    };

// Create a marker for each place selected in the search box
    generalMarkers.push(
      new google.maps.Marker({
          map,
          icon,
          title: place.name,
          position: place.geometry.location,
      })
    );
      map.setCenter(place.geometry.location);
  }

// Clear out the old markers
    function clearMarkers() {
      for (var i = 0; i < generalMarkers.length; i++) {
          if (generalMarkers[i]) {
              generalMarkers[i].setMap(null);
          }
      }
      generalMarkers = [];
  }

// Show all museum place type on button click "Art places"
const artPlaces = document.getElementById("btn-art");

// Show all park place type on button click "Outdoor places"
const outdoorPlaces = document.getElementById("btn-outdoor");

// Show all restaurant place type on button click "eat-places"
const pubPlaces = document.getElementById("btn-pub");

// Show all amusement_park place type on button click "amusement-places"
const amusementPlaces = document.getElementById("btn-amusement");