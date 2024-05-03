// Genera un número aleatorio entre 1 y 100
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

function adivinarNumero() {
  // Solicita al usuario que ingrese un número
  const numeroIngresado = parseInt(prompt("Ingresa un número entre 1 y 100:"));

  // Verifica si el número ingresado es válido
  if (isNaN(numeroIngresado) || numeroIngresado < 1 || numeroIngresado > 100) {
    alert("Número inválido. Por favor, ingresa un número entre 1 y 100.");
    adivinarNumero(); // Llama a la función nuevamente
    return;
  }

  // Compara el número ingresado con el número aleatorio
  if (numeroIngresado === numeroAleatorio) {
    alert("¡Felicidades! Has adivinado el número correcto.");
  } else if (numeroIngresado < numeroAleatorio) {
    alert("El número ingresado es menor. Intenta de nuevo.");
    adivinarNumero(); // Llama a la función nuevamente
  } else {
    alert("El número ingresado es mayor. Intenta de nuevo.");
    adivinarNumero(); // Llama a la función nuevamente
  }
}

// Inicia el juego
adivinarNumero();
