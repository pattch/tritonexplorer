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
	$('.content .upload.floating-button').on('click', function(e) {
		$('.content .upload.container').toggleClass('hidden');
		console.log("Upload Clicked");
		e.preventDefault();
	});
}

// Called by google maps' callback
function initMap() {
	// map.data.loadGeoJson('data.json');
	console.log("InitMap called");
	var uluru = {lat: -25.363, lng: 131.044};
	var map = new google.maps.Map($('#map')[0], {
	  zoom: 4,
	  center: uluru
	});
	var marker = new google.maps.Marker({
	  position: uluru,
	  map: map
	});
}