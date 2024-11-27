//  14. Crear una función que reciba 1 número, imprimir si es negativo o si es
// positivo o si es cero.

function valor(num1) {
  if (num1 > 0) {
    console.log(`El número ${num1} es positivo`);
  }

  if (num1 < 0) {
    console.log(`El número ${num1} es negativo`);
  }
  if (num1 === 0) {
    console.log(`El número ${num1} es igual a cero`);
  }
}

valor(20);
valor(-8);
valor(0);
