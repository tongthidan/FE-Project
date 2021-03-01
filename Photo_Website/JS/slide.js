
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("MySlide");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length/3; i++) {
        slides[i].style.display = "none";
        slides[i+3].style.display = "none";
        slides[i+6].style.display = "none";
    }
    slideIndex++;
    console.log(slideIndex);
    if (slideIndex >= slides.length/3) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active","");
        

    }
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex +2].style.display = "block";
    slides[slideIndex +5].style.display = "block";
    dots[slideIndex -1].className += "active";
 

    setTimeout(showSlides, 3000); // Change image every 2 seconds
}
