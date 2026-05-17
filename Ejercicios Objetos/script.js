// 1. Creando un objeto simple
console.log("--- Ejercicio 1 ---");
const alumno = {
  nombre: "Juan Pérez",
  edad: 20,
  curso: "Programación Web"
};
console.log("Información del alumno:", alumno);

// 2. Accediendo a propiedades
console.log("\n--- Ejercicio 2 ---");
const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2022
};
console.log("Marca usando punto:", carro.marca);
console.log("Modelo usando corchetes:", carro["modelo"]);

// 3. Alterando valores
console.log("\n--- Ejercicio 3 ---");
const productoObj = {
  nombre: "Laptop",
  precio: 1500
};
productoObj.precio = 1350; // Alterando el precio
console.log("Producto actualizado:", productoObj);

// 4. Adicionando propiedades
console.log("\n--- Ejercicio 4 ---");
const persona = {
  nombre: "María",
  edad: 25
};
persona.telefono = "123456789";
persona.ciudad = "Madrid"; 
console.log("Persona actualizada:", persona);

// 5. Removiendo propiedades
console.log("\n--- Ejercicio 5 ---");
const usuarioInfo = {
  nombre: "Carlos",
  email: "carlos@example.com",
  contrasena: "password123" // senha
};
delete usuarioInfo.contrasena;
console.log("Objeto después de remover contraseña:", usuarioInfo);

// 6. Creando métodos
console.log("\n--- Ejercicio 6 ---");
const calculadoraSimple = {
  sumar: function(a, b) { // somar
    return a + b;
  }
};
console.log("Suma de 10 y 20:", calculadoraSimple.sumar(10, 20));

// 7. Método usando this
console.log("\n--- Ejercicio 7 ---");
const usuarioThis = {
  nombre: "Ana",
  edad: 30,
  presentar: function() { // apresentar
    console.log(`Hola, mi nombre es ${this.nombre}`);
  }
};
usuarioThis.presentar();

// 8. Sistema de alumno
console.log("\n--- Ejercicio 8 ---");
const alumnoSistema = {
  nombre: "Luis",
  nota: 8,
  verificarAprobacion: function() {
    if (this.nota >= 7) {
      return "Aprobado";
    } else {
      return "Reprobado";
    }
  }
};
console.log(`El alumno ${alumnoSistema.nombre} está: ${alumnoSistema.verificarAprobacion()}`);

// 9. Recorriendo objeto
console.log("\n--- Ejercicio 9 ---");
const libro = {
  titulo: "1984",
  autor: "George Orwell",
  paginas: 328
};
for (let propiedad in libro) {
  console.log(`${propiedad}: ${libro[propiedad]}`);
}

// 10. Array de objetos
console.log("\n--- Ejercicio 10 ---");
const productosArray = [
  { nombre: "Mouse", precio: 25 },
  { nombre: "Teclado", precio: 50 },
  { nombre: "Monitor", precio: 200 }
];
productosArray.forEach(prod => {
  console.log(`Nombre: ${prod.nombre}, Precio: $${prod.precio}`);
});

// 11. Control de stock
console.log("\n--- Ejercicio 11 ---");
const productoStock = {
  nombre: "Auriculares",
  stock: 10, // estoque
  vender: function() {
    if (this.stock > 0) {
      this.stock -= 1;
      console.log(`Producto vendido. Stock restante: ${this.stock}`);
    } else {
      console.log("Sin stock.");
    }
  }
};
productoStock.vender();
productoStock.vender();

// 12. Registro de personas
console.log("\n--- Ejercicio 12 ---");
const personasArray = [
  { nombre: "Pedro", edad: 15 },
  { nombre: "Lucía", edad: 22 },
  { nombre: "Sofía", edad: 17 },
  { nombre: "Miguel", edad: 35 }
];
console.log("Personas mayores de edad:");
personasArray.forEach(pers => {
  if (pers.edad >= 18) {
    console.log(pers.nombre);
  }
});

// 13. Sistema bancario simple
console.log("\n--- Ejercicio 13 ---");
const cuentaBancaria = {
  titular: "Andrés",
  saldo: 1000,
  depositar: function(valor) {
    this.saldo += valor;
    console.log(`Depósito de $${valor} exitoso. Saldo actual: $${this.saldo}`);
  },
  retirar: function(valor) { // sacar
    if (valor <= this.saldo) {
      this.saldo -= valor;
      console.log(`Retiro de $${valor} exitoso. Saldo actual: $${this.saldo}`);
    } else {
      console.log("Saldo insuficiente para retirar.");
    }
  }
};
cuentaBancaria.depositar(500);
cuentaBancaria.retirar(200);

// 14. Carrito de compras
console.log("\n--- Ejercicio 14 ---");
const carritoCompras = [
  { producto: "Zapatos", precio: 120, cantidad: 1 },
  { producto: "Camisa", precio: 40, cantidad: 2 },
  { producto: "Pantalón", precio: 60, cantidad: 1 }
];
let totalCarrito = 0;
carritoCompras.forEach(item => {
  totalCarrito += item.precio * item.cantidad;
});
console.log("Valor total de la compra:", totalCarrito);

// 15. Media de la clase
console.log("\n--- Ejercicio 15 ---");
const alumnosClase = [
  { nombre: "Julia", nota: 8 },
  { nombre: "Lucas", nota: 6 },
  { nombre: "Marcos", nota: 9 },
  { nombre: "Elena", nota: 7 }
];
let sumaNotasClase = 0;
let mayorNotaClase = alumnosClase[0].nota;

alumnosClase.forEach(al => {
  sumaNotasClase += al.nota;
  if (al.nota > mayorNotaClase) {
    mayorNotaClase = al.nota;
  }
});
const mediaClase = sumaNotasClase / alumnosClase.length;
console.log("Media de la clase:", mediaClase);
console.log("Mayor nota de la clase:", mayorNotaClase);

// 16. Sistema de login
console.log("\n--- Ejercicio 16 ---");
const sistemaLogin = {
  usuario: "admin",
  contrasena: "123", // senha
  login: function(user, pass) {
    if (this.usuario === user && this.contrasena === pass) {
      console.log("Login correcto. ¡Bienvenido!");
    } else {
      console.log("Usuario o contraseña incorrectos.");
    }
  }
};
sistemaLogin.login("admin", "123");
sistemaLogin.login("user", "pass");

// 17. Objeto con múltiples métodos
console.log("\n--- Ejercicio 17 ---");
const calculadoraMultiple = {
  sumar: function(a, b) { return a + b; },
  restar: function(a, b) { return a - b; },
  multiplicar: function(a, b) { return a * b; },
  dividir: function(a, b) { 
    if (b === 0) return "No se puede dividir por cero";
    return a / b; 
  }
};
console.log("Suma (10, 5):", calculadoraMultiple.sumar(10, 5));
console.log("Resta (10, 5):", calculadoraMultiple.restar(10, 5));
console.log("Multiplicación (10, 5):", calculadoraMultiple.multiplicar(10, 5));
console.log("División (10, 5):", calculadoraMultiple.dividir(10, 5));

// 18. Sistema de productos
console.log("\n--- Ejercicio 18 ---");
const inventarioProductos = [
  { nombre: "Impresora", precio: 150, stock: 5 },
  { nombre: "Escáner", precio: 100, stock: 0 },
  { nombre: "Monitor", precio: 200, stock: 2 }
];
console.log("Productos con stock disponible (> 0):");
inventarioProductos.forEach(p => {
  if (p.stock > 0) {
    console.log(`- ${p.nombre} (Stock: ${p.stock})`);
  }
});

// 19. Mini sistema escolar
console.log("\n--- Ejercicio 19 ---");
const alumnoEscolar = {
  nombre: "Diego",
  notas: [],
  adicionarNota: function(nota) {
    this.notas.push(nota);
  },
  calcularMedia: function() {
    if (this.notas.length === 0) return 0;
    let suma = 0;
    this.notas.forEach(n => suma += n);
    return suma / this.notas.length;
  }
};
alumnoEscolar.adicionarNota(8);
alumnoEscolar.adicionarNota(7);
alumnoEscolar.adicionarNota(9);
console.log(`Media del alumno ${alumnoEscolar.nombre}: ${alumnoEscolar.calcularMedia()}`);

// 20. Sistema de empleados
console.log("\n--- Ejercicio 20 ---");
const empleado = {
  nombre: "Valeria",
  salario: 3000,
  cargo: "Desarrolladora",
  aumentarSalario: function() {
    const aumento = this.salario * 0.10;
    this.salario += aumento;
    console.log(`Salario de ${this.nombre} aumentado en 10%. Nuevo salario: $${this.salario}`);
  }
};
empleado.aumentarSalario();

// 21. Sistema completo de tienda
console.log("\n--- Ejercicio 21 ---");
const tiendaProducto = {
  nombre: "Silla Gamer",
  precio: 250,
  stock: 2, // estoque
  vender: function(cantidad = 1) {
    if (this.stock - cantidad >= 0) {
      this.stock -= cantidad;
      console.log(`Venta realizada de ${cantidad} unidades. Stock restante: ${this.stock}`);
    } else {
      console.log(`Venta fallida. Stock insuficiente (Stock actual: ${this.stock})`);
    }
  },
  reponer: function(cantidad) { // repor
    this.stock += cantidad;
    console.log(`Stock repuesto con ${cantidad} unidades. Stock actual: ${this.stock}`);
  }
};

tiendaProducto.vender(1);
tiendaProducto.vender(2); // Intentando vender más del stock actual
tiendaProducto.reponer(5);
tiendaProducto.vender(2);
