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
    const searchBox = new google.maps.places.SearchBox(input);
// Bias the SearchBox results towards current map's viewport
    map.addListener("bounds_changed", function() {
      searchBox.setBounds(map.getBounds());
    });
// Create markers when users click on a result in the search box
    let generalMarkers = [];
// Listen for the event fired when the user selects a prediction
    searchBox.addListener("places_changed", function() {
      const places = searchBox.getPlaces();
      if (places.length == 0) {
          window.alert("Type something");
      return;
    }
// Clear out the old markers
    generalMarkers.forEach(function(marker) {
      marker.setMap(null);
    });
    generalMarkers = [];
// For each place, get the icon, name and location
    const bounds = new google.maps.LatLngBounds();
    places.forEach(function(place) {
      if (!place.geometry || !place.geometry.location) {
        return;
    }
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
    if (place.geometry.viewport) {
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });
}
