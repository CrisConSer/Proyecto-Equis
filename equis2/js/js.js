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
dot1.classList.add('dot--fill');

dot1.onclick = function () {
  imgchange.src = "./imagen/Carrusel/dot1.jpg";
  setActiveDot(dot1);

}

dot2.onclick = function () {
  imgchange.src = "./imagen/Carrusel/dot2.jpg";
  setActiveDot(dot2);
}

dot3.onclick = function () {
  imgchange.src = "./imagen/Carrusel/dot3.jpg";
  setActiveDot(dot3);
}

dot4.onclick = function () {
  imgchange.src = "./imagen/Carrusel/dot4.jpg";
  setActiveDot(dot4);
}

function setActiveDot(dot){
  document.querySelectorAll('.dot').forEach(function(dot){
    dot.classList.remove('active');
    dot.classList.remove('dot--fill');
  });
  dot.classList.add('active');
  dot.classList.add('dot--fill');
}

document.getElementById('openChatbotBtn').addEventListener('click', function () {
  // Abre el chatbot React en una nueva ventana o de la manera que prefieras
  window.open('http://localhost:3000', '_blank');
});





