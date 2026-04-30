// ===============================
// 1. Operações básicas com variáveis
// ===============================
let num1 = 10;
let num2 = 5;

let soma = num1 + num2;
let subtracao = num1 - num2;
let multiplicacao = num1 * num2;
let divisao = num1 / num2;

console.log("1) Operações básicas:");
console.log("Soma:", soma);
console.log("Subtração:", subtracao);
console.log("Multiplicação:", multiplicacao);
console.log("Divisão:", divisao);


// ===============================
// 2. Cálculo de média
// ===============================
let nota1 = 7;
let nota2 = 8;
let nota3 = 9;

let media = (nota1 + nota2 + nota3) / 3;

console.log("\n2) Média:");
console.log("Média:", media);


// ===============================
// 3. Verificação de idade
// ===============================
let idade = 20;

let maiorDeIdade = idade >= 18;

console.log("\n3) Maior de idade:");
console.log(maiorDeIdade);


// ===============================
// 4. Comparação de valores
// ===============================
let a = "10";
let b = 10;

console.log("\n4) Comparação:");
console.log("== :", a == b);   // true (compara valor)
console.log("===:", a === b);  // false (compara valor e tipo)

// Explicação:
// == ignora o tipo (string vs number)
// === compara tipo + valor


// ===============================
// 5. Operadores lógicos
// ===============================
let idadePessoa = 25;

let dentroFaixa = idadePessoa > 18 && idadePessoa < 60;

console.log("\n5) Faixa etária:");
console.log(dentroFaixa);


// ===============================
// 6. Cálculo de desconto
// ===============================
let precoProduto = 100;
let desconto = 0.15;

let valorFinal = precoProduto - (precoProduto * desconto);

console.log("\n6) Desconto:");
console.log("Valor final:", valorFinal);


// ===============================
// 7. Conversão de tipos
// ===============================
let valor = "50";

let numeroConvertido = Number(valor);
let resultadoConversao = numeroConvertido + 10;

console.log("\n7) Conversão:");
console.log(resultadoConversao);


// ===============================
// 8. Expressão complexa
// ===============================
let resultadoExp = (10 + 5) * 2 - 8 / 4;

console.log("\n8) Expressão complexa:");
console.log(resultadoExp);

// Ordem:
// 1. Parênteses
// 2. Multiplicação e divisão
// 3. Soma e subtração


// ===============================
// 9. Operadores de atribuição
// ===============================
let x = 10;

x += 5;  // 15
console.log("\n9) x += 5:", x);

x *= 2;  // 30
console.log("x *= 2:", x);

x -= 10; // 20
console.log("x -= 10:", x);


// ===============================
// 10. Verificação composta
// ===============================
let idadeDriver = 22;
let temCarteira = true;

let podeDirigir = idadeDriver >= 18 && temCarteira;

console.log("\n10) Pode dirigir:");
console.log(podeDirigir);


// ===============================
// 11. Sistema de cálculo de salário
// ===============================
let salarioBase = 2000;
let horasExtras = 10;
let valorHoraExtra = 20;

let salarioTotal = salarioBase + (horasExtras * valorHoraExtra);

console.log("\n11) Salário total:");
console.log(salarioTotal);


// ===============================
// 12. Operadores encadeados
// ===============================
console.log("\n12) Operadores encadeados:");
let resultadoLogico = 5 > 3 && 8 < 10 || 2 > 5;
console.log(resultadoLogico);

// Explicação:
// true && true = true
// true || false = true


// ===============================
// 13. Problema clássico de tipo
// ===============================
console.log("\n13) Tipos:");
console.log("10" + 5); // "105" (concatenação)
console.log("10" - 5); // 5 (conversão para número)

// Explicação:
// + concatena se tiver string
// - força conversão para número


// ===============================
// 14. Validação de valor
// ===============================
let numero = 50;

let valido = numero > 0 && numero < 100;

console.log("\n14) Número válido:");
console.log(valido);


// ===============================
// 15. Sistema de compra com desconto
// ===============================
let preco = 30;
let quantidade = 5;

let totalCompra = preco * quantidade;

if (totalCompra > 100) {
    totalCompra = totalCompra * 0.9; // aplica 10% desconto
}

console.log("\n15) Total da compra:");
console.log(totalCompra);


// ===============================
// 16. Mini sistema de compras
// ===============================
let nomeProduto = "Camiseta";
let precoItem = 40;
let quantidadeItem = 3;

let total = precoItem * quantidadeItem;

console.log("\n16) Compra:");
console.log("Produto:", nomeProduto);
console.log("Total: R$", total);