/*Kildehttps://www.w3schools.com/howto/howto_js_topnav_responsive.asp*/
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function changeColor() {
  document.getElementById("box-button").style.backgroundColor = "green";
}


function changeColor2() {
  document.getElementById("box-button2").style.backgroundColor = "green";
}