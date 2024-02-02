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
