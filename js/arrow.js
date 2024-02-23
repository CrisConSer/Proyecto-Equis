window.onload = function () {
  // Variables
  const IMAGENES = [
      './imagen/Carrusel/dot1.jpg',
      './imagen/Carrusel/dot2.jpg',
      './imagen/Carrusel/dot3.jpg',
      './imagen/Carrusel/dot4.jpg'
  ];

  let posicionActual = 0;
  let $botonRetroceder = document.getElementById('arrow-image-left');
  let $botonAvanzar = document.getElementById('arrow-image-right');
  let $imagen = document.getElementById('imagen-principal');
  let dotButtons = document.querySelectorAll('.dot');

  function actualizarImagen() {
      $imagen.src = IMAGENES[posicionActual];
      actualizarBotonActivo();
  }

  function avanzarImagen() {
      posicionActual = (posicionActual + 1) % IMAGENES.length;
      actualizarImagen();
  }

  function retrocederImagen() {
      posicionActual = (posicionActual - 1 + IMAGENES.length) % IMAGENES.length;
      actualizarImagen();
  }

  function actualizarBotonActivo() {
      dotButtons.forEach((boton, index) => {
          if (index === posicionActual) {
              boton.classList.add('active');
          } else {
              boton.classList.remove('active');
          }
      });
  }

  // Eventos
  $botonAvanzar.addEventListener('click',()=>{
    avanzarImagen();
    actualizarBotonActivo();
  });
  $botonRetroceder.addEventListener('click', retrocederImagen);

  dotButtons.forEach((boton, index) => {
      boton.addEventListener('click', function() {
          posicionActual = index;
          actualizarImagen();
      });
  });

  // Mostrar la primera imagen al cargar la página
  actualizarImagen();
};
