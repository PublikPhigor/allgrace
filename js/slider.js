showSlides();

function showSlides() {
  let i;
  let slides = document.querySelectorAll('.slide');
  for (i = 0; i < slides.length; i++) {
      slides[i].classList.toggle('active');
    if (i === slides.length) {
        i = 1;
    }
  }; 

  setTimeout(showSlides, 4000); // Change image every 2 seconds
}
