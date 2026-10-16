/*
Variáveis e tipos de dados (Lógica)
Variável é uma caixinha com nome que guarda um valor: número, texto ou verdadeiro/falso.

O que é
Variável é uma caixinha com nome, onde o programa guarda um valor para usar depois.

Como funciona
Você dá um nome à caixa e coloca um valor dentro. O valor pode mudar durante o programa (por isso se chama variável). Tipos principais: número (10 ou 3.5), texto ("Ana") e verdadeiro/falso (true/false). Em JavaScript use let quando o valor muda e const quando não muda.

Exemplos
JavaScript
let nome = "Ana";
let idade = 25;
let estudando = true;
console.log(nome, idade);

Python
nome = "Ana"
idade = 25
estudando = True
print(nome, idade)
*/

// Exercícios para codar e subir no Git:
// 01 - Guarde nome, idade e cidade em variáveis e mostre uma frase com elas.

let name = "Willian Lobato dos Santos";
let age = 33;
let city = "Arapongas - PR";

console.log("Meu nome é " + name + ", tenho " + age + " anos e moro em " + city + ".");

// 02 -Troque o valor de duas variáveis (a e b) sem perder nenhum.
let a = 10;
let b = 20;

console.log("Antes da troca: a = " + a + ", b = " + b);

// Troca de valores
let temp = a;
a = b;
b = temp;

console.log("Depois da troca: a = " + a + ", b = " + b);




// 03 - Guarde preço e quantidade de um produto e mostre o total.
let preco = 15.50;
let quantidade = 3;     
let total = preco * quantidade;
console.log("O total é: " + total);
