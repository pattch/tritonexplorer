'use strict';

var searchable_mixed = [];
var searchable_titles = [];
var location_id_by_tag = {};
var location_id_by_title = {};

$(document).ready(function() {
	initializeMapPage();
})

function initializeMapPage() {
    var searchBox = $('#pac-input');
    initSearch(searchBox);
}

function initializeLocations() {
	var lat_txt = $('.content .info.container .lat').text(),
		lng_txt = $('.content .info.container .lng').text();

	if(lat_txt == "" || lng_txt == "") {
		var ucsd = {lat: 32.8801, lng: -117.2340};
		return {
			"title": "UCSD",
			"location": ucsd,
			"is_default": true
		}
	}

	var lat_float = parseFloat(lat_txt),
		lng_float = parseFloat(lng_txt);

	var title = $('.content .info.container h3').text();

	return {
		"title": title,
		"location": {
			lat: lat_float,
			lng: lng_float
		},
		"is_default": false
	}
}

// Called by google maps' callback
function initMap() {
	var location_info = initializeLocations();
	var location = location_info["location"];

	var map = new google.maps.Map($('#map')[0], {
	  zoom: 15,
	  center: location
	});

	// If we're not on the home page, add a marker
	if(!location_info["is_default"]) {
		var marker = new google.maps.Marker({
			position: location,
			map: map,
			title: location_info["title"]
		});
	}

	var input = document.getElementById('pac-input');
    // var searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
}

function onSearchSelect(event, ui) {
	console.log(event);
}

function getLocations() {
	var locationsURL = "/locations/all/";
	$.ajax({
	  dataType: "json",
	  url: locationsURL,
	  success: function(response) {
	  	$.each(response, function(index, obj) {
	  		var loc_name = obj['name'];
	  		var loc_id = obj['id'];
	  		var tags = obj['tags'];
	  		searchable_titles.push(loc_name);
	  		searchable_mixed.push(loc_name);
	  		location_id_by_title[loc_name] = loc_id;
	  		for(var i = 0; i < tags.length; i = i + 1) {
	  			var ids_by_tag = location_id_by_tag[tags[i]];
	  			if(typeof ids_by_tag == "undefined") {
	  				ids_by_tag = [];
	  			}
  				ids_by_tag.push(loc_id);
  				location_id_by_tag[tags[i]] = ids_by_tag;
  				var tag = tags[i];
  				if(typeof tag != "undefined" && tag != "" && $.inArray(tag,searchable_mixed) == -1)
  					searchable_mixed.push(tag);
	  		}
	  	});

	  	console.log(searchable_mixed);
	  }
	});
}

function getIdByLabel(label) {
	// Try to get it by location
	var loc_id = location_id_by_title[label];
	if(typeof loc_id != "undefined")
		return loc_id;

	// Otherwise searching by tags, for now just return any location associated with tag
	var tag_ids = location_id_by_tag[label];
	if(typeof tag_ids != "undefined" && tag_ids.length != 0) {
		return tag_ids[0];
	}

}

function initSearch(searchBox) {
	getLocations();

	searchBox.autocomplete({
		source: searchable_mixed,
		select: function(event, ui) {
			var label = ui.item.label;
			var id = getIdByLabel(label);
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
