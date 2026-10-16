/*
DIO.ME

Tipos de dados e variáveis
#O que vamos aprender ?

- O que são variáveis
- Como utilizar variáveis
- Tipos de variáveis
*/

// declarando variáveis

console.log("Digite o nome do seu jogador:");

let nickName = "Willian Lobato POKEMON";

console.log("Seja bem-vindo(a) " + nickName + "!");
console.log(nickName + " acessou o jogo!");
console.log("-");
console.log("-");


// Declarando constantes
const notificacao = "Pokemon Go diz:";
console.log(notificacao + "tem um novo Pokemon na Região");
console.log(notificacao + "você foi derrotado por um lider");
console.log("-");
console.log("-");


// Ajudando a vovó
let coffePot = "Café Pilão";
let shugarPot = "Açúcar União";
let cookiePot = "Biscoito Passatempo";
const textGrandfather = "Na cozinha da vovó tem: ";

console.log(textGrandfather + coffePot + " -- " + shugarPot + " -- " + cookiePot); 

coffePot = "Café 3 Corações";
shugarPot = "Açúcar Cristal";
cookiePot = "Biscoito Bono";

console.log(textGrandfather + coffePot + " -- " + shugarPot + " -- " + cookiePot)
console.log("-");
console.log("-");


/*### Tipos variáveis

STRING - São valores de texto, que podem ser declarados com aspas simples ou duplas. Ex: "Olá mundo" ou 'Olá mundo'.

NUMBER - São valores numéricos, que podem ser declarados com ou sem ponto decimal. Ex: 10 ou 10.5.

BOOLEAN - São valores lógicos, que podem ser declarados como verdadeiro ou falso. Ex: true ou false.
*/

// POKEM - Exemplo de tipos de variáveis
let pokemonName = "Pikachu"; // STRING
let pokemonName2 = 'Charmander'; // STRING

let pokemonLevel = 5; // NUMBER
let pokemonLevel2 = 10; // NUMBER

let pokemonIsAlive = true; // BOOLEAN
let pokemonIsAlive2 = false; // BOOLEAN

console.log("O nome do pokemon é: " + pokemonName + " e ele está no nível: " + pokemonLevel + " e está vivo? " + pokemonIsAlive);

console.log("O nome do pokemon é: " + pokemonName2 + " e ele está no nível: " + pokemonLevel2 + " e está vivo? " + pokemonIsAlive2);

console.log("-");
console.log("-");
