const slides = document.querySelectorAll('.slide');
const slideCont = document.querySelector('.slide-container');

let i = 0;

showSlides();

function showSlides() {
  
  slideCont.style.transform = `translateX(${-i * 33.33}%)`;
  slideCont.style.transition = `0.5s ease`;
  i++;

  if(i === slides.length) {
      i = 0;
  };

  setTimeout(showSlides, 4000); // Change image every 2 seconds
}
