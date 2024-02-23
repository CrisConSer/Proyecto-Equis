const btnAbrirModal = document.querySelector('#btn-abrir-modal');
const btnAbrirBurguer = document.querySelector('#btn-abrir-burguer');
const btnCerrarModal = document.querySelector('#btn-cerrar-modal');
const modal = document.querySelector('#formulario');
const burguerNav = document.querySelector('#menuburguer');

btnAbrirBurguer.addEventListener("click",()=>{
    
    burguerNav.showModal();
})

btnAbrirModal.addEventListener("click",()=>{
    modal.showModal();
    
})

btnCerrarModal.addEventListener("click",()=>{
    modal.close();
})

