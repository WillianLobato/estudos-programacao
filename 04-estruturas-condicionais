// Estruturas condicionais (if, else if, else)

/*
Esse é um dos conteúdos mais importantes da Lógica de Programação, porque permite que o programa tome decisões com base em condições. É como ensinar o computador a avaliar situações e escolher o que fazer.

1. Como funcionam as estruturas condicionais?
Imagine esta lógica:
- if → se uma condição for verdadeira, execute algo.
- else if → se a primeira condição for falsa, verifique outra.
- else → se nenhuma das condições anteriores for verdadeira, execute uma alternativa.

2. if — Se
O if é utilizado quando queremos executar um código somente se uma condição for verdadeira.
*/

// Exemplo: verificar a maioridade.
let idade = 20

if (idade >= 18){ 
    console.log("Você é maior de idade!")
}

console.log("..")
console.log("..")
/*
Entenda o código:
1. Criamos uma variável chamada idade com o valor 20.
2. O programa verifica se idade >= 18.
3. Como 20 é maior que 18, a condição é verdadeira.
4. O código dentro das chaves {} é executado.

Se a idade fosse 15, nenhuma mensagem seria exibida, porque não existe um else.
*/


/*
3. if e else — Se e senão
Usamos else quando queremos definir o que acontecerá se a condição do if for falsa.
*/

let idade2 = 16;

if(idade2 >= 18){
    console.log("Maior de Idade")
} else{
    console.log("Menor de Idade")
}
console.log("..")
console.log("..")
// O programa verifica a condição. Como 16 não é maior ou igual a 18, ele executa o bloco else.
// Macete: pense no else como o plano B do programa.


/*
4. else if — Senão, se
O else if serve para verificar uma segunda ou terceira condição quando as anteriores são falsas.

Vamos criar um exemplo de classificação de notas.

Vamos criar um exemplo de classificação de notas.
*/

let nota = 8

if (nota >= 9){
    console.log("Excelente")
} else if ( nota >= 7){
    console.log("Aprovado")
} else {
    console.log("Reprovado")
}

console.log("..")
console.log("..")
/*
1. nota >= 9
8 é menor que 9. A condição é falsa.

2. nota >= 7
8 é maior que 7. A condição é verdadeira e o programa imprime "Aprovado".

3. As condições restantes
Não são verificadas porque uma condição anterior já foi atendida.
*/


/*
Atenção à ordem das condições!
Veja este exemplo incorreto para classificar notas:
*/
let nota1 =9

if (nota1 >= 5){
    console.log("Recuperação")
} else if(nota1 >= 7){
    console.log("Aprovado")
} else if(nota1 >= 9){
    console.log("Excelente")
}
console.log(" ")
console.log(" ")
/*
resultado será Recuperação, mesmo com nota 9!

Isso acontece porque a primeira condição, nota >= 5, já é verdadeira. O programa não chega às seguintes.

Regra importante: quando as condições representam faixas de valores, organize-as da mais restritiva para a menos restritiva, conforme a lógica desejada.
*/


/*
5. Exercícios para praticar: 
*/

console.log ("1. Se idade = 20, oque será exibido?") 
let idade01 = 20

if (idade01 >= 18){
    console.log("A")
} else{
    console.log("B")
}
// A
//Acertou! 20 >= 18 é verdadeiro, então o programa imprime A.

console.log(" ")
console.log(" ")

console.log("2. Se temperatura = 15, qual mensagem será exibida?")
let temperatura = 15

if (temperatura > 30){
    console.log("Quente")
} else if(temperatura >= 20){
    console.log("Ameno")
} else{
    console.log("Frio")
}
// Frio
// Acertou! 15 não é maior que 30 nem maior ou igual a 20. Por isso, o else é executado.

console.log(" ")
console.log(" ")

console.log("3. Se nota = 6, qual resultado aparece?")
let nota03 = 6

if(nota03 >= 7){
    console.log("Aprovado!")
} else if (nota03 >= 5){
    console.log("Recuperação!")
} else {
    console.log("Reprovado!")
}
// Recuperação
// Acertou! 6 não atende à primeira condição, mas atende a nota >= 5. O resultado é Recuperação.

console.log(" ")
console.log(" ")

console.log("4. O que acontece quando nenhuma condição do if ou dos else if é verdadeira e existe um else?")
console.log("R: O bloco else é executado.")

// Acertou! O else é a alternativa final e é executado quando nenhuma condição anterior foi verdadeira.

console.log(" ")
console.log(" ")


console.log("5. Qual é o resultado se nota = 9?")
let nota05 = 9

if(nota05 >= 5){
    console.log("Recuperação")
} else if(nota >= 9){
    console.log("Excelente")
}
// Recuperação
// Acertou! A primeira condição já é verdadeira, então o programa não verifica o else if. A ordem das condições muda o resultado.


/*
6. Resumo para memorizar
Estrutura	Quando usar
if	Verificar uma condição
else if	Testar outra condição se a anterior falhar
else	Executar uma alternativa final
Lembre-se: o JavaScript verifica as condições de cima para baixo e executa o primeiro bloco cuja condição seja verdadeira. Os demais blocos da mesma cadeia são ignorados.
*/