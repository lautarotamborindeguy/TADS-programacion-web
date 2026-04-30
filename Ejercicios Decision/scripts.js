// ===============================
// Problema 1 – Sistema de Acesso (Login simple)
// ===============================

// Solicitamos datos al usuario
let nombre = prompt("Ingrese su nombre:");
let password = prompt("Ingrese su contraseña:");

// Validamos credenciales
if (nombre === "admin" && password === "1234") {
  console.log("1) Acceso permitido");
} else {
  console.log("1) Acceso negado");
}


// ===============================
// Problema 2 – Sistema de Notas
// ===============================

let nota = Number(prompt("Ingrese una nota (0 a 10):"));

// Clasificamos según la nota usando if / else if
if (nota >= 9) {
  console.log("2) Excelente");
} else if (nota >= 7) {
  console.log("2) Bueno");
} else if (nota >= 5) {
  console.log("2) Regular");
} else {
  console.log("2) Reprobado");
}


// ===============================
// Problema 3 – Caja de tienda
// ===============================

let precio = Number(prompt("Ingrese el precio del producto:"));
let cantidad = Number(prompt("Ingrese la cantidad:"));

// Calculamos total
let total = precio * cantidad;

// Aplicamos descuento si corresponde
if (total > 100) {
  total = total * 0.9; // 10% de descuento
}

console.log("3) Total final:", total);


// ===============================
// Problema 4 – Verificador de números
// ===============================

let numero = Number(prompt("Ingrese un número:"));

// Verificamos si es positivo o negativo
if (numero >= 0) {
  console.log("4) El número es positivo");
} else {
  console.log("4) El número es negativo");
}

// Verificamos si es par o impar
if (numero % 2 === 0) {
  console.log("Es par");
} else {
  console.log("Es impar");
}


// ===============================
// Problema 5 – Contador con for
// ===============================

console.log("5) Números del 1 al 20:");
for (let i = 1; i <= 20; i++) {
  console.log(i);
}

console.log("Números pares:");
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}


// ===============================
// Problema 6 – Tabuada
// ===============================

let numeroTabla = Number(prompt("Ingrese un número para ver su tabla:"));

console.log("6) Tabla de multiplicar:");
for (let i = 1; i <= 10; i++) {
  console.log(numeroTabla + " x " + i + " = " + (numeroTabla * i));
}


// ===============================
// Problema 7 – Sistema de votación
// ===============================

let edad = Number(prompt("Ingrese su edad:"));

// Evaluamos las reglas
if (edad < 16) {
  console.log("7) No vota");
} else if (edad >= 16 && edad <= 17) {
  console.log("7) Voto opcional");
} else if (edad >= 18 && edad <= 70) {
  console.log("7) Voto obligatorio");
} else if (edad < 0) {
  console.log("7) Edad inválida");
} else {
  console.log("7) Voto opcional");
}


// ===============================
// Problema 8 – Control de stock
// ===============================

let stock = 10;

console.log("8) Control de stock:");

// Mientras haya stock, seguimos vendiendo
while (stock > 0) {
  console.log("Stock actual:", stock);
  stock--; // disminuye 1 por cada venta
}

console.log("Sin stock");


// ===============================
// Problema 9 – Suma acumulada
// ===============================

let suma = 0;

// Sumamos del 1 al 100
for (let i = 1; i <= 100; i++) {
  suma += i;
}

console.log("9) Suma total:", suma);


// ===============================
// Problema 10 – Múltiples intentos de login
// ===============================

let intentos = 0;
let acceso = false;

// Permitimos hasta 3 intentos
while (intentos < 3 && !acceso) {
  let user = prompt("Usuario:");
  let pass = prompt("Contraseña:");

  if (user === "admin" && pass === "1234") {
    acceso = true;
    console.log("10) Acceso permitido");
  } else {
    intentos++;
    console.log("Intento incorrecto");
  }
}

// Si falló 3 veces
if (!acceso) {
  console.log("Cuenta bloqueada");
}


// ===============================
// Problema 11 – Sistema completo de compra
// ===============================

let nombreProducto = prompt("Nombre del producto:");
let precioProducto = Number(prompt("Precio:"));
let cantidadProducto = Number(prompt("Cantidad:"));

// Calculamos total
let totalCompra = precioProducto * cantidadProducto;
let descuento = 0;

// Aplicamos reglas de descuento
if (totalCompra > 200) {
  descuento = 0.15;
} else if (totalCompra > 100) {
  descuento = 0.10;
}

// Calculamos total final
let totalFinal = totalCompra - (totalCompra * descuento);

console.log("11) Compra:");
console.log("Producto:", nombreProducto);
console.log("Total:", totalFinal);
console.log("Descuento aplicado:", descuento * 100 + "%");