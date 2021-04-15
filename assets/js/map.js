/*CREDIT: Google Map Documentation
https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete
and
https://www.youtube.com/watch?v=c3MjU9E9buQ&t=98s
*/

var autocomplete = null;
var map = null;
let generalMarker = [];
var service;
var cardPlaces = document.getElementById("card-places");
var cardMarkers = [];

// Set the map limited to UK
function initAutocomplete() {
	map = new google.maps.Map(document.getElementById("map"), {
		zoom: 14,
		center: new google.maps.LatLng(50.8211196, -0.1404786),
	});

	const options = {
		componentRestrictions: {
			country: "gb"
		},
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
	generalMarker.push(
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
	for (var i = 0; i < generalMarker.length; i++) {
		if (generalMarker[i]) {
			generalMarker[i].setMap(null);
		}
	}
	generalMarker = [];
}

// Show the different categories on button click
const artPlaces = document.getElementById("btn-art");
const outdoorPlaces = document.getElementById("btn-outdoor");
const cafePlaces = document.getElementById("btn-cafe");
const amusementPlaces = document.getElementById("btn-amusement");

// Create a list of my all my place selections
const placeType = [
	[artPlaces, "museum"],
	[outdoorPlaces, "park"],
	[cafePlaces, "cafe"],
	[amusementPlaces, "amusement_park"]
];

placeType.forEach(function(option) {
	option[0].onclick = function() {
		clearMarkers();
		clearResults();
		nearbySearch(option[1]);
	};
});

// Erase both markers and cards on click on another category
function clearResults() {
	cardPlaces.innerHTML = "";
	cardMarkers.forEach(function(cardMarkers) {
		cardMarkers.setMap(null);
	});
	cardMarkers = [];
}

// Create a Bootstrap card for each place
function displayPlaces(places) {
	// Select a portion of the elements in the array
	let placeSlice = places.slice(0, 10);
	placeSlice.forEach(place => {
		let image = "";
		// Display a photo if present in the API data
		if (place.photos) {
			image = place.photos[0].getUrl();
		}
		// Display an icon as placeholder if the photo is not available
		else {
			image = "assets/images/icon-no-image-available.png";
		}
		// Append a Bootstrap card to the card container in html file
		cardPlaces.innerHTML =
			cardPlaces.innerHTML +
        `
        <div class="card">
        <div class="carousel-image">
        <img src= "${image}" class="card-img-top">
        </div>
        <div class="carousel-content card-body">
        <h3>${place.name}</h3>
        <p>${place.vicinity}</p>
        </div>
        </div>
        `;
	});

}

function nearbySearch(placeType) {
	var request = {
		location: {
			"lat": 50.8211196,
			"lng": -0.1404786
		},
		radius: '5000',
		type: [placeType]
	};

	// Create the places service
	service = new google.maps.places.PlacesService(map);

	// Perform a nearby search
	service.nearbySearch(request, callback);

	// Display the markers for the four categories
	function callback(results, status) {
		displayPlaces(results);
		if (status === google.maps.places.PlacesServiceStatus.OK)
			for (var i = 0; i < results.length; i++) {
				createMarker(results[i]);
			}
	}
}

function createMarker(place) {
    if (!place.geometry || !place.geometry.location) return;
    console.log("place", place);
	cardMarkers.push(new google.maps.Marker({
		map,
		position: place.geometry.location
	}));
}


