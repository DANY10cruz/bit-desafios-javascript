// 10.10. Crear una función que reciba 4 números,
// mostrar el resultado de: a/b*(c+d)

function resultado(num1, num2, num3, num4) {
  // return (num1 / num2) * (num3 + num4);
  let division = num1 / num2;
  let suma = num3 + num4;
  let resultadoFinal = division * suma;
  return resultadoFinal;
}
resultado(68, 2, 3, 9);
// let resultadoFinal = resultado(68, 2, 3, 9);
// console.log(resultadoFinal);
