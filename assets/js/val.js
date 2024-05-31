// Escucha de elementos
const nameInput = document.getElementById("nombre");
const nameStatus = document.getElementById("nombreEstado");
const emailInput = document.getElementById("email");
const emailStatus = document.getElementById("emailEstado");
const empresaRadio = document.getElementById("tipoContactoEmpresa");
const nombreEmpresaDiv = document.getElementById("nombreEmpresaDiv");


// Escucha de eventos
nameInput.addEventListener("keydown", validarNombre);
emailInput.addEventListener("keydown", validarEmail);

// Validacion del Nombre
function validarNombre() {
    const nameRegex = /^[a-zA-ZÀ-Öà-ö\s]{3,}$/; // Updated regex for names
    const name = nameInput.value;
  
    if (nameRegex.test(name)) {
      nameStatus.textContent = "Nombre válido";
      nameStatus.style.color = "green";
    } else {
      nameStatus.textContent = "Nombre no válido (mínimo 2 caracteres)";
      nameStatus.style.color = "red";
    }
  }

// Validacion del Email
function validarEmail() {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;
  const email = emailInput.value;

  if (emailRegex.test(email)) {
    emailStatus.textContent = "Email válido";
    emailStatus.style.color = "green";
  } else {
    emailStatus.textContent = "Email no válido";
    emailStatus.style.color = "red";
  }
}


// Habilitar/Deshabilitar nombre de empresa
empresaRadio.addEventListener("change", function() {
  if (empresaRadio.checked) {
    nombreEmpresaDiv.style.display = "block";
  } else {
    nombreEmpresaDiv.style.display = "none";
  }
});
