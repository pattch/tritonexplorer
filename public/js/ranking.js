'use strict';

//Call this function when the page loads
$(document).ready(function(){
    initializeRankingPage();
})

//Call the function when the page is ready

function initializeRankingPage(){
    $('#ranking-icon').on('click', function(e){
        $('#sort-by-time').fadeIn(100);
        e.preventDefault();
    });
    
    $('#see-colleges').on('click', function(e){
        $('#rank-colleges').fadeIn(100);
        $('#rank-friends').fadeOut(100);
        e.preventDefault();
    })
    
    $('#see-friends').on('click', function(e){
        $('#rank-friends').fadeIn(100);
        $('#rank-colleges').fadeOut(100);
        e.preventDefault();
    })
}

$(document).mouseup(function (e)
{
    var container = $("#sort-by-time");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.fadeOut(100);
    }
});