// 7.Crear una función para saludar, si la función recibe un nombre,
//  imprimir por consola: Hola, ____! Si la función no recibe un nombre,
//  imprimir: Hola, desconocido!

function saludar(nombre = "!Desconocido") {
  console.log(`Hola, ${nombre}`);
}
saludar("Daniel");
saludar();
