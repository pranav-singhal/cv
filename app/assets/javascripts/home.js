
function openModal() {
  console.log("inside openmodal");
document.getElementById('myModal').style.display = "block";
}

function closeModal() {
document.getElementById('myModal').style.display = "none";
}

function currentSlide(n) {
showSlides(slideIndex = n);
}


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}
$( document ).ready(function(){
var modal1 = document.getElementById('myModal1');
var modal2 = document.getElementById('myModal2');

// Get the button that opens the modal
var btn1 = document.getElementById("openmodal1");
var btn2 = document.getElementById("openmodal2");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[1];
var span2 = document.getElementsByClassName("close")[2];
btn1.onclick = function() {
  console.log(modal1);
    modal1.style.display = "block";
}
btn2.onclick = function() {
    modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal1.style.display = "none";

}
span2.onclick = function() {
  console.log(this);
    modal2.style.display = "none";

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal1) {

        modal1.style.display = "none";
    }
    if (event.target == modal2) {

        modal2.style.display = "none";
    }

}


});
// When the user clicks on the button, open the modal















// $( document ).ready(function() {
//   function openModal() {
//   document.getElementById('myModal').style.display = "block";
// }
//
// function closeModal() {
//   document.getElementById('myModal').style.display = "none";
// }
//
// var slideIndex = 1;
// showSlides(slideIndex);
//
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }
//
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }
//
// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var captionText = document.getElementById("caption");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//
//   slides[slideIndex-1].style.display = "block";
//
// }
// });
