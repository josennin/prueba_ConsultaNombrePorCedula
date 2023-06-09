	// Obtén una referencia a los campos de texto
const cedulaInput = document.getElementById('cedula');
const apellidoInput = document.getElementById('nombre');

// Agrega un evento de escucha a los campos de texto
cedulaInput.addEventListener('input', autocompletar);
apellidoInput.addEventListener('input', autocompletar);

function autocompletar() {
  const valorCedula = cedulaInput.value;
  //const valorApellido = apellidoInput.value;

  // Realiza una solicitud a la API
  fetch('https://apis.gometa.org/cedulas/'+valorCedula)
    .then(response => response.json())
    .then(data => {

      // Actualiza los valores de los campos de texto con los datos obtenidos
      apellidoInput.value = data.nombre;
      apellidoInput.disabled = true;
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
