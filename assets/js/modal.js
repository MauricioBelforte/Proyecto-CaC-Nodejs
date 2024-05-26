    // Obtener elementos
    var btnInicio = document.getElementById("botonModalInicio");
    var btnCarrito = document.getElementById("botonModalCarrito");
    var modalInicio = document.getElementById("ventanamodalInicio");
    var modalCarrito = document.getElementById("ventanamodalCarrito");
    var xcerrarInicio = document.getElementsByClassName("close")[0];
    var xcerrarCarrito = document.getElementsByClassName("close")[1];
    
    var btnRegisterCancelar1 = document.getElementById("registerStepCancel1");
    var btnRegisterSiguiente = document.getElementById("registerStepSiguiente");

    var registerStep1 = document.getElementById("register-step-1");
    var registerStep2 = document.getElementById("register-step-2");

    var btnRegisterCancelar2 = document.getElementById("registerStepCancel2");
    var btnRegisterAnterior = document.getElementById("registerStepAnterior");
    var btnRegisterConfirm = document.getElementById("registerStepConfirm");
    

    var modalConfirm = document.getElementById("ventanaModalRegisterConfirm");
    var xcerrarRegisterConfirm = document.getElementsByClassName("close")[2];
    
    // Cuando se hace clic en el botón, abrir la ventana modal
    btnCarrito.onclick = function() {
        modalCarrito.style.display = "block";
    }

     // Cuando se hace clic en el botón, abrir la ventana modal
     btnInicio.onclick = function() {
        modalInicio.style.display = "block";
    }



    // Cuando se hace clic en la X, cerrar la ventana modal
    xcerrarInicio.onclick = function() {
        modalInicio.style.display = "none";
    }

    xcerrarCarrito.onclick = function() {
        modalCarrito.style.display = "none";
    }

    xcerrarRegisterConfirm.onclick = function () {
        modalConfirm.style.display = "none"
    }
   


    // Cuando el usuario hace clic fuera de la ventana modal, cerrarla
    window.onclick = function(event) {
        if (event.target == modalCarrito) {
            modalCarrito.style.display = "none";
        }

        if (event.target == modalConfirm) {
            modalConfirm.style.display = "none";
        }
    }

    // Se agregan interacciones a los botones del Formulario para navegar entre los dos pasos

    // Cuando el usuario hace click en CANCELAR la web lo devuelve a la pagina principal.
    btnRegisterCancelar1.addEventListener('click', () => {
        history.pushState({}, null, "../index.html"); // Para actualizar la URL sin recargar
        window.location.href = "../index.html";})

    // Cuando el usuario hace click en SIGUIENTE le muestra el paso siguiente del registro
    btnRegisterSiguiente.onclick = function(){
        registerStep1.style.display = "none";
        registerStep2.style.display = "block";
        window.scrollTo(0, 0);
    }

    // Cuando el usuario hace click en CANCELAR la web lo devuelve a la pagina principal.
    btnRegisterCancelar2.addEventListener('click', () => {
        history.pushState({}, null, "../index.html"); // Para actualizar la URL sin recargar
        window.location.href = "../index.html";})

    // Cuando el usuario hace click en SIGUIENTE le muestra el paso siguiente del registro
    btnRegisterAnterior.onclick = function(){
        registerStep1.style.display = "block";
        registerStep2.style.display = "none";
        window.scrollTo(0, 0);
    }

    btnRegisterConfirm.onclick = function() {
        modalConfirm.style.display = "block";
    }

    
    