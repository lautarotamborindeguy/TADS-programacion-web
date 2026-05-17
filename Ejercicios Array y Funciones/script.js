// 1. Lista de frutas
console.log("--- Ejercicio 1 ---");
const frutas = ["Manzana", "Banana", "Naranja", "Pera", "Uva"];
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}
console.log("Cantidad de elementos: " + frutas.length);

// 2. Agregando y eliminando elementos
console.log("\n--- Ejercicio 2 ---");
const nombres = ["Juan", "María", "Pedro"];
nombres.push("Ana"); // Agrega al final
nombres.pop(); // Elimina el último
console.log("Array actualizado:", nombres);

// 3. Suma de números
console.log("\n--- Ejercicio 3 ---");
const numeros = [10, 20, 30, 40, 50];
let suma = 0;
for (let i = 0; i < numeros.length; i++) {
  suma += numeros[i];
  console.log("Valor: " + numeros[i])
}
console.log("Resultado final de la suma:", suma);

// 4. Función de saludo
console.log("\n--- Ejercicio 4 ---");
function saludar(nombre) {
  console.log(`Hola, ${nombre}!`);
}
saludar("Carlos");

// 5. Función de multiplicación
console.log("\n--- Ejercicio 5 ---");
function multiplicar(a, b) {
  return a * b;
}
console.log("Multiplicación:", multiplicar(5, 4));

// 6. Recorriendo arrays con for...of
console.log("\n--- Ejercicio 6 ---");
const colores = ["Rojo", "Verde", "Azul", "Amarillo"];
for (const color of colores) {
  console.log(color);
}

// 7. Mayor número del array
console.log("\n--- Ejercicio 7 ---");
const numArray = [5, 12, 8, 130, 44];
let mayor = numArray[0];
for (let i = 1; i < numArray.length; i++) {
  if (numArray[i] > mayor) {
    mayor = numArray[i];
  }
}
console.log("El mayor número es:", mayor);

// 8. Media de notas
console.log("\n--- Ejercicio 8 ---");
const notas = [8, 6.5, 9, 7];
function calcularMediaYMostrarSituacion(notas) {
  let sumaNotas = 0;
  for (let i = 0; i < notas.length; i++) {
    sumaNotas += notas[i];
  }
  const media = sumaNotas / notas.length;
  console.log("Media final:", media);
  if (media >= 7) {
    console.log("Situación: aprobado");
  } else {
    console.log("Situación: reprobado");
  }
}
calcularMediaYMostrarSituacion(notas);

// 9. Contador de elementos
console.log("\n--- Ejercicio 9 ---");
function contarElementos(array) {
  return array.length;
}
console.log("Cantidad de elementos en [1, 2, 3]:", contarElementos([1, 2, 3]));

// 10. Lista de alumnos
console.log("\n--- Ejercicio 10 ---");
const alumnos = ["Lucas", "Marta", "Hugo", "Sofía", "Leo"];
console.log("Alumnos en posiciones pares:");
// En programación, generalmente las posiciones pares son los índices 0, 2, 4, etc.
for (let i = 0; i < alumnos.length; i += 2) {
  console.log(`Posición ${i}: ${alumnos[i]}`);
}

// 11. Función con array
console.log("\n--- Ejercicio 11 ---");
function sumarArray(numerosArray) {
  let total = 0;
  for (let i = 0; i < numerosArray.length; i++) {
    total += numerosArray[i];
  }
  return total;
}
console.log("Suma total del array [1, 2, 3, 4, 5]:", sumarArray([1, 2, 3, 4, 5]));

// 12. Arrow Function
console.log("\n--- Ejercicio 12 ---");
const dobro = (numero) => numero * 2;
console.log("El doble de 15 es:", dobro(15));

// 13. Sistema de productos
console.log("\n--- Ejercicio 13 ---");
const productos = ["Teclado", "Mouse", "Monitor"];
const precios = [50, 25, 200];
let sumaPrecios = 0;
console.log("Productos disponibles:");
for (let i = 0; i < productos.length; i++) {
  console.log(`- ${productos[i]} ($${precios[i]})`);
  sumaPrecios += precios[i];
}
console.log("Total de la suma de los precios:", sumaPrecios);

// 14. Buscar elemento
console.log("\n--- Ejercicio 14 ---");
const listaNombres = ["Andrés", "Beatriz", "Carlos", "Daniela"];
const nombreBuscado = "Carlos"; // Simulamos que se solicita este nombre
if (listaNombres.includes(nombreBuscado)) {
  console.log("Encontrado");
} else {
  console.log("No encontrado");
}

// 15. Cuenta regresiva
console.log("\n--- Ejercicio 15 ---");
function cuentaRegresiva(numero) {
  for (let i = numero; i >= 0; i--) {
    console.log(i);
  }
}
cuentaRegresiva(5);

// 16. Separando pares e impares
console.log("\n--- Ejercicio 16 ---");
const numParesImpares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function separarParesImpares(array) {
  const pares = [];
  const impares = [];
  for (let num of array) {
    if (num % 2 === 0) {
      pares.push(num);
    } else {
      impares.push(num);
    }
  }
  console.log("Números pares:", pares);
  console.log("Números impares:", impares);
}
separarParesImpares(numParesImpares);

// 17. Calculadora con funciones
console.log("\n--- Ejercicio 17 ---");
function sumarCalc(a, b) { return a + b; }
function restarCalc(a, b) { return a - b; }
function multiplicarCalc(a, b) { return a * b; }
function dividirCalc(a, b) {
  if (b === 0) return "No se puede dividir por cero";
  return a / b;
}

const n1 = 10;
const n2 = 2;
console.log(`Suma de ${n1} y ${n2}:`, sumarCalc(n1, n2));
console.log(`Resta de ${n1} y ${n2}:`, restarCalc(n1, n2));
console.log(`Multiplicación de ${n1} y ${n2}:`, multiplicarCalc(n1, n2));
console.log(`División de ${n1} y ${n2}:`, dividirCalc(n1, n2));

// 18. Sistema de notas completo
console.log("\n--- Ejercicio 18 ---");
const arrayNotas = [7, 5, 10, 8, 9];
function gestionarNotas(notas) {
  let suma = 0;
  let mayor = notas[0];
  let menor = notas[0];
  for (let i = 0; i < notas.length; i++) {
    suma += notas[i];
    if (notas[i] > mayor) mayor = notas[i];
    if (notas[i] < menor) menor = notas[i];
  }
  const media = suma / notas.length;
  console.log("Media de las notas:", media);
  console.log("Mayor nota:", mayor);
  console.log("Menor nota:", menor);
}
gestionarNotas(arrayNotas);

// 19. Mini sistema de registro
console.log("\n--- Ejercicio 19 ---");
const registroNombres = [];
function agregarNombre(nombre) {
  registroNombres.push(nombre);
}
function listarNombres() {
  console.log("Lista de nombres registrados:", registroNombres);
}
function mostrarCantidadTotalNombres() {
  console.log("Cantidad total de nombres:", registroNombres.length);
}
agregarNombre("Laura");
agregarNombre("Miguel");
agregarNombre("Sofía");
listarNombres();
mostrarCantidadTotalNombres();

// 20. Ranking de puntuaciones
console.log("\n--- Ejercicio 20 ---");
const puntuaciones = [150, 300, 50, 400, 200];
let mayorPuntuacion = puntuaciones[0];
let menorPuntuacion = puntuaciones[0];
let sumaPuntuaciones = 0;
for (let p of puntuaciones) {
  if (p > mayorPuntuacion) mayorPuntuacion = p;
  if (p < menorPuntuacion) menorPuntuacion = p;
  sumaPuntuaciones += p;
}
const mediaPuntuaciones = sumaPuntuaciones / puntuaciones.length;
console.log("Mayor puntuación:", mayorPuntuacion);
console.log("Menor puntuación:", menorPuntuacion);
console.log("Media de las puntuaciones:", mediaPuntuaciones);

// 21. Simulación de carrito de compras
console.log("\n--- Ejercicio 21 ---");
const carritoProductos = ["Camisa", "Pantalón", "Zapatos"];
const carritoPrecios = [50, 80, 120];
const carritoCantidades = [2, 1, 1];

function listarCarrito() {
  console.log("Productos en el carrito:");
  for (let i = 0; i < carritoProductos.length; i++) {
    console.log(`- ${carritoProductos[i]} | Precio unitario: $${carritoPrecios[i]} | Cantidad: ${carritoCantidades[i]}`);
  }
}
function calcularTotalCarrito() {
  let total = 0;
  for (let i = 0; i < carritoProductos.length; i++) {
    total += carritoPrecios[i] * carritoCantidades[i];
  }
  return total;
}
function aplicarDescuento(total) {
  if (total > 200) {
    // Aplicamos un descuento del 10% por ejemplo
    const descuento = total * 0.10;
    console.log(`Descuento aplicado ($${descuento}). Nuevo total: $${total - descuento}`);
    return total - descuento;
  }
  console.log(`No aplica descuento. Total: $${total}`);
  return total;
}

listarCarrito();
const totalCompra = calcularTotalCarrito();
console.log(`Total sin descuento: $${totalCompra}`);
aplicarDescuento(totalCompra);
