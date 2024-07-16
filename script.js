//----------------- POPUP SECTION ---------------//
function togglePopup() {
  document.getElementById("popup-1").classList.toggle("active");
}

document.getElementById('myForm').addEventListener('submit', function() {
  setTimeout(() => {
    this.reset();
  }, 1000);
});

//------------- WHAT WE DO SECTION --------------//

let sliderInner = document.querySelector(".slider-inner");
let dots = document.querySelectorAll(".dot");
let currentSlide = 0;

document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelector(".slides");
  const dots = document.querySelectorAll(".dot");

  const slidesPerGroup = 3;
  const slideWidth = 310;
  const gap = 30;
  let currentIndex = 0;

  function showSlide(index) {
    const offset = index * slidesPerGroup * (slideWidth + gap);
    slides.style.transform = `translateX(-${offset}px)`;

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });

    currentIndex = index;
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index);
    });
    dot.setAttribute("data-slide", index);
  });

  showSlide(currentIndex);
});

//-------------- OUR PROJECT SECTION --------------//

document.addEventListener("DOMContentLoaded", function () {
  const contents = document.querySelectorAll(".content");
  const image = document.getElementById("image");

  contents.forEach(content => {
      content.addEventListener("click", () => {
          contents.forEach(c => c.classList.remove("active"));

          content.classList.add("active");

          const newImageSrc = content.getAttribute("data-image");
          image.src = newImageSrc;
      });
  });
});