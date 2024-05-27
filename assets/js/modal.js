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


    function validarFormulario() {
        // Se leen las referencias a los elementos del formulario
        const nombre = document.getElementById("nombre");
        const email = document.getElementById("email");
        const asunto = document.getElementById("contactAsuntoSelected");
        const mensaje = document.getElementById("mensaje");
        const tipoContactoPersonal = document.getElementById("tipoContactoPersonal");
        const tipoContactoEmpresa = document.getElementById("tipoContactoEmpresa");
      
        // Se chequea si todos los campos obligatorios fueron rellenados
        if (nombre.value === "") {
          alert("¡El campo 'Nombre' es obligatorio!");
          nombre.focus();
          return false;
        }
      
        if (email.value === "") {
          alert("¡El campo 'Correo electrónico' es obligatorio!");
          email.focus();
          return false;
        }
      
        if (asunto.value === "") {
          alert("¡El campo 'Asunto' es obligatorio!");
          asunto.focus();
          return false;
        }
      
        if (mensaje.value === "") {
          alert("¡El campo 'Mensaje' es obligatorio!");
          mensaje.focus();
          return false;
        }
      
        // Se chequea si se ingresó un formato válido de email ingresado tiene
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
          alert("¡Ingrese un formato de correo electrónico válido!");
          email.focus();
          return false;
        }
      
        // Se cheque si se seleccionó alguna de las opciones del los Radio-Button
        if (!tipoContactoPersonal.checked && !tipoContactoEmpresa.checked) {
          alert("¡Seleccione un tipo de contacto!");
          tipoContactoPersonal.focus();
          return false;
        }
      
        // Si se pasan todas las validaciones, se envia el formulario y se muestra el mensaje de éxito
        const formularioContacto = document.getElementById("formularioContacto");
        const mensajeExito = document.getElementById("mensajeExito"); // Get the success message element
      
        formularioContacto.addEventListener('submit', (event) => {
          event.preventDefault();  // Evitar el envío de formulario predeterminado
      
          // Se envian los datos del formulario 
      
          // Se muestra el mensaje de exito
          mensajeExito.textContent = "Mensaje enviado exitosamente!";
          mensajeExito.style.display = "block"; // Show the success message
      
          // Se limpia el formulario en caso de que el usuario desee enviar otra consulta.
          formularioContacto.reset();
        });
      
        // Se autoriza el envío del formulario
        return true;
      }
      

      const formularioContacto = document.getElementById("formularioContacto");
      formularioContacto.addEventListener("submit", validarFormulario);
      
      
      
    
    