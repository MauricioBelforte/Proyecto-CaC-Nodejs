    // Obtener elementos
    var btnInicio = document.getElementById("botonModalInicio");
    var btnCarrito = document.getElementById("botonModalCarrito");
    var modalInicio = document.getElementById("ventanamodalInicio");
    var modalCarrito = document.getElementById("ventanamodalCarrito");
    var xcerrarInicio = document.getElementsByClassName("close")[0];
    var xcerrarCarrito = document.getElementsByClassName("close")[1];
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


    // Cuando el usuario hace clic fuera de la ventana modal, cerrarla
    window.onclick = function(event) {
        if (event.target == modalCarrito) {
            modalCarrito.style.display = "none";
        }else if(event.target == modalInicio) {
            modalInicio.style.display = "none";

        }
    }

   