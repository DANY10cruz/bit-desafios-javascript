// 13.  Crear una función que reciba 2 números, imprimir si el primer número es
// divisible por el segundo.

function valor(num1, num2) {
  if (num1 % num2 === 0) {
    console.log(`El número es divisible`);
  } else {
    console.log(`El número  no es divisible`);
  }
}
valor(13, 2);
valor(10, 2);
