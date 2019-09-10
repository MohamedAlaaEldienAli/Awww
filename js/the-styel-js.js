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

var containerEl = document.querySelector('.container');

            var mixer = mixitup(containerEl);



$(".first-btn").addClass("change-color");

$(".custom-btn").click(function()
{
    $(this).addClass("change-color");
    $(".custom-btn").not(this).removeClass("change-color");
    
})

