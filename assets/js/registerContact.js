var registerStep1 = document.getElementById("register-step-1");
var registerStep2 = document.getElementById("register-step-2");
    
var btnRegisterCancel1 = document.getElementById("registerCancel1");
var btnRegisterSiguiente = document.getElementById("registerSiguiente");    
var btnRegisterCancel2 = document.getElementById("registerCancel2");
var btnRegisterAnterior = document.getElementById("registerAnterior");
var btnRegisterConfirm = document.getElementById("registerConfirm");

var modalConfirm = document.getElementById("ventanaModalRegisterConfirm");
var xcerrarRegisterConfirm = document.getElementsByClassName("close")[2];


// Cuando el usuario hace click en CANCELAR la web lo devuelve a la pagina principal
    btnRegisterCancel1.addEventListener('click', () => {
        history.pushState({}, null, "../index.html"); // Para actualizar la URL sin recargar
            window.location.href = "../index.html";})
  
// Cuando el usuario hace click en SIGUIENTE le muestra el paso siguiente del registro
    btnRegisterSiguiente.onclick = function(){
        registerStep1.style.display = "none";
        registerStep2.style.display = "block";
        window.scrollTo(0, 0);
    }

// Cuando el usuario hace click en CANCELAR la web lo devuelve a la pagina principal.
    btnRegisterCancel2.addEventListener('click', () => {
        history.pushState({}, null, "../index.html"); // Para actualizar la URL sin recargar
        window.location.href = "../index.html";})

    
// Cuando el usuario hace click en ANTERIOR le muestra el paso siguiente del registro
    btnRegisterAnterior.onclick = function(){
        registerStep1.style.display = "block";
        registerStep2.style.display = "none";
        window.scrollTo(0, 0);
    }


// Cuando el usuario hace click en CONFIRMAR se le muestra la ventana confirmando el registro exitoso
btnRegisterConfirm.onclick = function() {
    modalConfirm.style.display = "block";
}


// Cuando se hace clic en la X, cerrar la ventana modal
xcerrarRegisterConfirm.onclick = function () {
  modalConfirm.style.display = "none"
}  



// // Validacion del email
// document.addEventListener("DOMContentLoaded", () => {
   
//     const emailInput = document.getElementById("email");
   
//     emailInput.addEventListener("keydown", () => {
//         console.log("¡Campo de correo electrónico enfocado!");
//     });
// });

   
