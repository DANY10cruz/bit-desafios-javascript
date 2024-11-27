// 6.Crear una función que reciba cuatro párametros,
//  un nombre, una prenda, un color y una cantidad y
//   retorne: ____ tiene __ ____ de color ____. Ej entrada: pepita, camisas, azul, 2
//  Ej salida: Pepita tiene 2 camisas de color azul.
function fullName1(nombre, cantidad, prenda, color) {
  return `${nombre} tiene ${cantidad} ${prenda} de color ${color}`;
}

let ejemplo6 = fullName1("Pepita", 2, "camisas", "azul");
console.log(ejemplo6);
