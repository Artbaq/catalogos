
function showSlides() {
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
//Hide all the slide with a loop
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
        slideInd++;

    if (slideInd > slides.length) {
      slideInd = 1
      
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }

        slides[slideInd -1].style.display = "block";  
        dots[slideInd -1].className += " active";
        setTimeout(showSlides, 4000); // Change image every 4 seconds
}

cont = 0;

var slideInd = 1;
//innerSlideshow( slideshow, promoList, '');     
showSlides(slideInd);
cont = 0;

//innerCatalogos(wrapper,technoCat, 'Tecnología');
//innerCatalogos(wrapper,gorrasCat, 'Gorras');
//cont = 0;

//innerCatalogos(footer, technoCat, 'Tecnología');
//innerCatalogos(footer, gorrasCat, 'Gorras');
