let lastScrollTop = 0;

window.addEventListener("scroll", function() {
  const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScrollTop > lastScrollTop) {
    // Scroll hacia abajo
    document.querySelector('.navegacion').classList.add('oculto');
  } else {
    // Scroll hacia arriba
    document.querySelector('.navegacion').classList.remove('oculto');
  }

  lastScrollTop = currentScrollTop;
});

// Accion dots

let dot1 = document.getElementById("dot-one");
let dot2 = document.getElementById("dot-two");
let dot3 = document.getElementById("dot-three");
let dot4 = document.getElementById("dot-four");
let imgchange = document.getElementById("imagen-principal");

dot1.onclick = function () {
  imgchange.src = "./imagen/Carrusel/dot1.jpg";
}

dot2.onclick = function () {
  imgchange.src = "./imagen/Carrusel/dot2.jpg";
}

dot3.onclick = function () {
  imgchange.src = "./imagen/Carrusel/dot3.jpg";
}

dot4.onclick = function () {
  imgchange.src = "./imagen/Carrusel/dot4.jpg";
}

