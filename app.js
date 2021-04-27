var ham = document.getElementById("ham")
var nav = document.getElementById("nav")

ham.addEventListener("click", function() {
  if (nav.style.left === "-100%") {
    nav.style.left ="0";
  }
  else {
    nav.style.left = "-100%"
  }
})