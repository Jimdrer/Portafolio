const btnDepartamentos = document.getElementById('btn-departamentos'),
	btnCerrarMenu = document.getElementById('btn-menu-cerrar'),
	grid = document.getElementById('grid'),
	contenedorEnlacesNav = document.querySelector('#menu .contenedor-enlaces-nav'),
	contenedorSubCategorias = document.querySelector('#grid .contenedor-subcategorias'),
	esDispositivoMovil = () => window.innerWidth <= 800;

const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".cont");
about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // remove selected from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove("activ");
    });
    e.target.classList.add("activ");
    // hide other articles
    articles.forEach(function (article) {
      article.classList.remove("activ");
    });
    const element = document.getElementById(id);
    element.classList.add("activ");
  }
});


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
var i;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " active";
}