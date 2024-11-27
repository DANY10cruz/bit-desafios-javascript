// Crear seis funciones,
// (sumar, restar, multiplicar, dividir, módulo, potencia),
// debe recibir 2 números e imprimir el resultado
// así: Ej entrada: 8, 4 Ej salida: 8 + 4 = 12

function sumar(a, b) {
  let resultado = a + b;
  console.log(`${a} + ${b} = ${resultado} `);
}
sumar(5, 5);

function restar(a, b) {
  let resultado6 = a - b;
  console.log(`${a} - ${b} = ${resultado6}`);
}
restar(10, 20);

function multiplicar(a, b) {
  let resultado2 = a * b;
  console.log(`${a} * ${b} = ${resultado2}`);
}
multiplicar(10, 20);

function dividir(a, b) {
  let resultado3 = a / b;
  console.log(`${a} / ${b} = ${resultado3}`);
}
dividir(10, 20);

function modulo(a, b) {
  let resultado4 = a % b;
  console.log(`${a} % ${b} = ${resultado4}`);
}
modulo(10, 20);

function potencia(a, b) {
  let resultado5 = a ** b;
  console.log(`${a} ^ ${b} = ${resultado5}`);
}
potencia(2, 3);
