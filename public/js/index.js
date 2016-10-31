'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// add any functionality and listeners you want here
	$('.content .upload.floating-button, .content .upload.container .button-red').on('click', function(e) {
		$('.content .upload.container').toggleClass('hidden');
		console.log("Upload Clicked");
		e.preventDefault();
	});

	// $('#add-location').on('click', function(e) {
	// 	console.log('Adding Location');
	// 	add_location();
	// 	e.preventDefault();
	// });
}

// Called by google maps' callback
function initMap() {
	// map.data.loadGeoJson('data.json');
	console.log("InitMap called");
	var ucsd = {lat: 32.8801, lng: -117.2340};
	var map = new google.maps.Map($('#map')[0], {
	  zoom: 15,
	  center: ucsd
	});

	// map.data.loadGeoJson('./js/map.geojson');

	var input = document.getElementById('pac-input');
    var searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
}