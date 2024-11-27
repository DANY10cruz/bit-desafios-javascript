// Crear seis funciones, (suma, resta, multiplica, divide, módulo, potencia),
// cada función debe recibir 2 números y retornar un resultado según corresponda.
// Crear otra función que reciba el nombre de la operación y 2 números,
//  debe imprimir el resultado. Ej entrada: suma, 8, 4 Ej salida: 8 + 4 = 12

function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}
multiplicar(10, 20);

function dividir(a, b) {
  return a / b;
}

function modulo(a, b) {
  return a % b;
}

function potencia(a, b) {
  return a ** b;
}

function probar(operacionFinal, a, b) {
  if (operacionFinal === "suma") {
    console.log(sumar(a, b));
  } else if (operacionFinal === "resta") {
    console.log(restar(a, b));
  } else if (operacionFinal === "multiplicar") {
    console.log(multiplicar(a, b));
  } else if (operacionFinal === "dividir") {
    if (b === 0) {
      console.log("No se puede dividir por cero");
    } else {
      console.log(dividir(a, b));
    }
  } else if (operacionFinal === "modulo") {
    console.log(modulo(a, b));
  } else if (operacionFinal === "exponente") {
    console.log(exponente(a, b));
  } else {
    console.log("Operación no válida");
  }
}
probar("suma", 10, 40);
