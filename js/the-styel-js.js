var hamburger=document.getElementById("nav-overlay");
var menu = document.getElementById("menu");

$("#menu").click(function(){
  hamburger.classList.add("top");
});

$(".close-icon i").click(function()
{
    hamburger.classList.remove("top");
})


$(document).ready(function() {
  $(".skitter-large").skitter();
});
