/*
Operadores e expressões (Lógica)
Contas, comparações (maior, igual) e lógica (e, ou, não).

O que é
Operadores são os símbolos que fazem contas, comparam valores ou combinam condições.

Como funciona
Há três grupos: 
aritméticos (+ - * / e o % que dá o resto da divisão), 
de comparação (> < == !=, que dão verdadeiro ou falso) 
e lógicos (e, ou, não: && || ! em JavaScript; and or not em Python). Atenção: um = guarda valor, dois == comparam. No JavaScript prefira === para comparar.

Exemplos
JavaScript
let a = 7;
let b = 2;
console.log(a + b);          // 9
console.log(a % b);          // 1 (resto)
console.log(a > b);          // true
console.log(a > 5 && b < 1); // false
Python
a = 7
b = 2
print(a + b)           # 9
print(a % b)           # 1 (resto)
print(a > b)           # True
print(a > 5 and b < 1) # False

*/

// Exercícios para codar e subir no Git:
// Calcule a média de 3 notas.

let valueA = 100
let ValueB = 300
let valueC = 600

console.log("A média de A + B + C é", (valueA + ValueB + valueC) / 3) // média


//  Converta Celsius para Fahrenheit. (F = (C \times 1.8) + 32\) ou \(F = (C \times 9/5) + 32\).
let celsius  = 30
let fahrenheit  = (celsius * 9 / 5) + 32;

console.log("Convertendo valor de Celsius para Fahrenheit = " + fahrenheit)



// Operadores Lógicos:
console.log("A soma de A + B + C é: ", valueA + ValueB + valueC) // Adição

console.log("A soma de A - B - C é: ", valueA - ValueB - valueC) // Subtração

console.log("A soma de A * B é: ", valueA * ValueB, " e a soma de B * C é ", ValueB * valueC) // Multiplicação

console.log("A Soma de A / B é: ", valueA / ValueB, " e a Soma de B / C é: ", ValueB / valueC) // Divisão

console.log("A Soma de A % B é: ", valueA % ValueB, " e a Soma de B % C é de ", ValueB % valueC) // Porcetagem

// Diga se um número é par ou ímpar usando o resto da divisão (%).
if(valueA % 2 === 0 ){
    console.log("O número é PAR")
}else{
    console.log("O número é IMPAR!")
}

if(ValueB % 2 === 1){
    console.log("O número é PAR!")
}else{
    console.log("O número é IMPAR!")
}

let numero = 15;

if (numero % 2 === 0) {
    console.log("O número é par.");
} else {
    console.log("O número é ímpar.");
}

