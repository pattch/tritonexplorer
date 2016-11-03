'use strict';

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
