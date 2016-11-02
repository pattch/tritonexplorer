'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializeMapPage();
})

/*
 * Function that is called when the document is ready.
 */
function initializeMapPage() {
	// add any functionality and listeners you want here
	$('.content .upload.floating-button').on('click', function(e) {
		$('.content .upload.container').fadeIn(100);
		console.log("Upload Clicked");
		e.preventDefault();
	});
    
    $('.content .upload.container .button-red').on('click', function(e) {
		$('.content .upload.container').hide();
		console.log("Upload Clicked");
		e.preventDefault();
	});

    var searchBox = $('#pac-input');
    initSearch(searchBox);
	// console.log(searchable_titles);

	// $('#add-location').on('click', function(e) {
	// 	console.log('Adding Location');
	// 	add_location();
	// 	e.preventDefault();
	// });
}

$(document).mouseup(function (e)
{
    var container = $('.content .upload.container');

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.fadeOut(100);
    }
});

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
    // var searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
}

function onSearchSelect(event, ui) {
	console.log(event);
}

function initSearch(searchBox) {
	searchBox.autocomplete({
		source: searchable_titles,
		select: function(event, ui) {
			// console.log(ui.item.label);
			var name = ui.item.label;
			var id = location_id_by_title[name];
			// console.log(id);
			var url = "/locations/id/" + id;
			location.href=url;

		}
	});
}

// Get the GPS data from the browser, if it supports GPS data.
function getGeoLocationConst() {
	if(navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(onGeoSuccess,onGeoError);
	} else {
		alert("Can't access GPS data.");
	}
}

function onGeoSuccess(event) {
	$('.content form #input-lat').val(event.coords.latitude);
	$('.content form #input-lng').val(event.coords.longitude);
}

function onGeoError(event) {
	alert("Error code " + event.code + ". " + event.message);
}
