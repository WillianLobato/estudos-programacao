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
Exercícios para codar e subir no Git:
 Calcule a média de 3 notas.
 Converta Celsius para Fahrenheit.
 Diga se um número é par ou ímpar usando o resto da divisão (%).
*/