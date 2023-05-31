var i = 0;
var k =3;
var seleccionados = {
    columna1: null,
    columna2: null
  };

var asociaciones = {
    'Psicologica': 'Psicologica',
    'Fisica': 'Fisica',
    'Sexual': 'Sexual',
    'Economica': 'Economica',
    'Educativa': 'Educativa',
    'Violencia': 'Violencia'
};

function reiniciarSeleccion() {
  var elementoColumna1 = seleccionados['columna1'];
  var elementoColumna2 = seleccionados['columna2'];

  if (elementoColumna1) {
    elementoColumna1.classList.remove('seleccionado');
    seleccionados['columna1'] = null;
  }

  if (elementoColumna2) {
    elementoColumna2.classList.remove('seleccionado');
    seleccionados['columna2'] = null;
  }
}

function seleccionarElemento(columna, elemento,palabra) {
    if (seleccionados[columna]) {
        seleccionados[columna].classList.remove('seleccionado');
    }
    seleccionados[columna] = elemento;
    seleccionados[columna].classList.add('seleccionado');
    verificarAsociacionCorrecta();
  }

function verificarAsociacionCorrecta() {
    var elementoColumna1 = seleccionados['columna1'];
    var elementoColumna2 = seleccionados['columna2'];

    if (elementoColumna1 && elementoColumna2) {
      var palabraColumna1 = elementoColumna1.getAttribute('data-palabra');
      var palabraColumna2 = elementoColumna2.getAttribute('data-palabra');

      if (asociaciones[palabraColumna1] === palabraColumna2) {
        elementoColumna1.classList.add('asociado');
        elementoColumna2.classList.add('asociado');
        mostrarMensajeCorrecto('¡Asociación correcta!');
        reiniciarSeleccion();
        i = i+1;
      }else {
        k = k-1
        reiniciarSeleccion();
        mostrarMensajeError('La asociación no es correcta\n Intentos:'+k);
    }
  }
  if (i == 6) {
    mostrarMensajeFelicitaciones();
  }

  if(k == 0){
    mostrarMensajeErrorFinal();
  }
}

function mostrarMensajeErrorFinal(mensajeDialog) {
  var mensajeDialog = document.getElementById('mensajeDialog');
  var capaBloqueo = document.getElementById('capaBloqueo');
  capaBloqueo.style.display = 'block';
  mensajeDialog.style.display = 'block';
  // Puedes personalizar el mensaje aquí
  var mensajeText = document.getElementById('mensajeText');
  mensajeText.textContent = '¡GAME OVER! No Has completado el juego.';
}

function mostrarMensajeFelicitaciones(mensajeDialog) {
  var mensajeDialog = document.getElementById('mensajeDialog');
  var capaBloqueo = document.getElementById('capaBloqueo');
  capaBloqueo.style.display = 'block';
  mensajeDialog.style.display = 'block';
  // Puedes personalizar el mensaje aquí
  var mensajeText = document.getElementById('mensajeText');
  mensajeText.textContent = '¡Felicitaciones! Has completado el juego.';
}

function cerrarMensaje() {
  var mensajeDialog = document.getElementById('mensajeDialog');
  var capaBloqueo = document.getElementById('capaBloqueo');
  capaBloqueo.style.display = 'none';
  mensajeDialog.style.display = 'none';

  // Aquí puedes escribir el código para reiniciar el juego
}

function mostrarMensajeCorrecto(mensaje) {
    var mensajeElemento = document.getElementById('mensaje');
    mensajeElemento.innerHTML = mensaje;
    mensajeElemento.style.display = 'block';

    setTimeout(function() {
      mensajeElemento.style.display = 'none';
    }, 2000);
  }
  
function mostrarMensajeError(mensaje) {
    var mensajeElemento = document.getElementById('mensaje1');
    mensajeElemento.innerHTML = mensaje;
    mensajeElemento.style.display = 'block';

    setTimeout(function() {
      mensajeElemento.style.display = 'none';
    }, 2000);
  }
