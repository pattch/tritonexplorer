'use strict';

//Call this function when the page loads
$(document).ready(function(){
    initializeRankingPage();
})

//Call the function when the page is ready

function initializeRankingPage(){
    $('#ranking-icon').on('click', function(e){
        $('#sort-by-time').fadeIn(200);
        e.preventDefault();
    });
}

$(document).mouseup(function (e)
{
    var container = $("#sort-by-time");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.fadeOut(200);
    }
});