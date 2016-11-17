'use strict';
// $(document).ready(initLikeButtons());

function openlogin(){
  document.getElementById('registerform').style.display="none";
  document.getElementById('loginform').style.display="block";
}
function hidelogin(){
  document.getElementById('loginform').style.display="none";
}

function openregister(){
  document.getElementById('loginform').style.display="none";
  document.getElementById('registerform').style.display="block";
}
function hideregister(){
  document.getElementById('registerform').style.display="none";
}

 var count=1;
 function changeColor(btn,color){
     var property = document.getElementById(btn);
     if (count == 0){
         property.style.backgroundColor = "#C0C0C0"
         count=1;
     }
     else{
         property.style.backgroundColor = "#F08080"
         count=0;
     }
 }
 var dislike_count=1;
 function dislikeChangeColor(btn,color){
     var property = document.getElementById(btn);
     if (dislike_count == 0){
         property.style.backgroundColor = "#C0C0C0"
         dislike_count=1;
     }
     else{
         property.style.backgroundColor = "#FFAE33"
        dislike_count=0;
     }
 }

// function initLikeButtons() {
//   var recommendations = $('.recommendation');
//   recommendations.each(function(index) {
//     // console.log($(this));
//     var like = $(this).find('.button.like');
//     var dislike = $(this).find('.button.dislike');

//     like.click(function() {
//       like.toggleClass('highlight');
//       dislike.removeClass('highlight');
//     });

//     dislike.click(function() {
//       dislike.toggleClass('highlight');
//       like.removeClass('highlight');
//     });
//   });
// }


var friendCount=1;
function changeFriendStatus(btn,value){
    var property = document.getElementById(btn);
    if (friendCount == 0){
        property.value = "✓friend"
        property.style.backgroundColor ="#7892c2"
        friendCount=1;
    }
    else{
        property.value = "Add friend"
        property.style.backgroundColor = "#FFAE33"
        friendCount=0;
    }

}





function openChangePassword(){
  document.getElementById('manageFriendForm').style.display="none";
  document.getElementById('changePasswordForm').style.display="block";
}

function hideChangePassword(){
  document.getElementById('changePasswordForm').style.display="none";
}

function openManageFriend(){
  document.getElementById('changePasswordForm').style.display="none";
  //$('#manageFriendForm').removeClass('hidden');
  document.getElementById('manageFriendForm').style.display="block";
}

function hideManageFriend(){
  document.getElementById('changePasswordForm').style.display="none";
  //$('#manageFriendForm').addClass('hidden');
  document.getElementById('manageFriendForm').style.display="none";

}
function openHelp(){
  document.getElementById('helpForm').style.display="block";
}
function hideHelp(){
  document.getElementById('helpForm').style.display="none";
}

/*//Handle login data from login form
$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

$(function() {
    $('form').submit(function() {
        $('#result').text(JSON.stringify($('loginform').serializeObject()));
        return false;
    });
});*/
