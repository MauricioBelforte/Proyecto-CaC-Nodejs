document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.boton-hamburguesa');
    const mainMenu = document.querySelector('.menu-variable');
    const botonesInicio = document.querySelector('.botones-iniciosesion-registro');
    const menuLinks = document.querySelectorAll('.menu-variable a'); // Selecciona todos los enlaces dentro del menú

    menuToggle.addEventListener('click', function() {
        mainMenu.classList.toggle('show');  /* classList despliega todas las claeses del objeto y la propiedad toggle agrega la clase si no esta, y si esta la quita */
        botonesInicio.classList.toggle('show');
    });

   
    // Añadir un evento click a cada enlace del menú para cerrar el menú al hacer clic
    menuLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            mainMenu.classList.remove('show');
            botonesInicio.classList.remove('show');
        });
    });

});






