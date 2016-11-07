'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializeLocationPage();
})

/*
 * Function that is called when the document is ready.
 */
function initializeLocationPage() {
	// TODO: Add close info button here and in view
	$('.content .info.floating-button, .content .info.container .button-red').on('click', function(e) {
		$('.content .info.container').toggleClass('hidden');
		console.log("Info Clicked");
		e.preventDefault();
	});
    
$(document).mouseup(function (e)
{
    var container1 = $('.content .upload.container');
    var container2 = $('.info .floating-button');
    
    if (!container2.is(e.target) // if the target of the click isn't the container...
        && container2.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container2.fadeOut(100);
    }
});
    
}