// 11. Crear una función que reciba 2 números, imprimir el mayor,

function mayor(num1, num2) {
  if (num1 > num2) {
    console.log(`El número ${num1} es mayor que el número ${num2}`);
  } else {
    console.log(`Escribe un número que cumpla la regla`);
  }
}

mayor(20, 5);
mayor(5, 20);
