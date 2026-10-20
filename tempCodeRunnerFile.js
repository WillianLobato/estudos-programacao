
/*
Como funciona?
1. Criamos contador = 1.
2. O programa verifica se contador <= 5.
3. Se for verdadeiro, imprime o contador.
4. O contador++ aumenta seu valor em 1.
5. O processo se repete até a condição ser falsa.

Cuidado com o laço infinito!

Veja este exemplo:
*/
let contador1 = 1

while( contador1 <= 5){
    console.log(contador1)
}

/*
O que está errado?

Esquecemos de escrever contador++. Como o valor permanece em 1, a condição continua verdadeira indefinidamente.

Atenção
Sempre verifique se existe uma forma de a condição se tornar falsa, quando isso for necessário para encerrar o laço.

Quando usar while?
Imagine um sistema que permite tentativas de acesso enquanto o usuário ainda não acertou a senha e possui tentativas disponíveis. O while é útil porque a quantidade de repetições depende de uma condição.
*/

console.log(" ")
console.log(" ")

/*
4. Estrutura do...while

O do...while tem uma diferença importante: o bloco de código é executado primeiro e a condição é verificada depois.
Exemplo básico
*/
let numero = 1

do{
    console.log(numero)
    numero++
} while (numero <= 5)

console.log(" ")
console.log(" ")
/*
Observe a posição da condição: ela fica no final, após o bloco do.
A principal diferença entre while e do...while
Veja os dois exemplos com a mesma condição falsa desde o início.
*/

console.log("EXEMPLO 01 - while")
let n = 10;

while (n < 5) {
    console.log(n);
}
console.log("Executa 0 vezes. A condição é verificada antes do bloco. Como é falsa, nada é impresso.")

console.log(" ")

console.log("EXEMPLO 02 - do..while")
let n1 = 10;

do {
    console.log(n1);
} while (n1 < 5);
console.log("Executa 1 vez. O bloco imprime 10 antes de verificar a condição falsa.")

// Essa é uma das diferenças mais cobradas em exercícios de lógica de programação.

console.log(" ")
console.log("____________________________________________________________________________________")

console.log("Exemplo prático — Menu de um sistema")
console.log("Um menu deve ser exibido pelo menos uma vez, para que o usuário possa escolher uma opção.")

let opcao = 0

do{
    console.log("1 - Consultar Saldo")
    console.log("2 - Fazer deposito")
    console.log("3 - Sair")

    opcao = 3
} while (opcao !== 3)

    console.log("Sistema Encerrado")

/*
Neste exemplo didático, a opção 3 é atribuída diretamente. O menu aparece uma vez e depois o laço termina.

Em um programa real, poderíamos ler a escolha do usuário e repetir o menu até que ele selecionasse a opção de saída.
*/
console.log(" ")
console.log("________________________________________")
console.log(" ")
/*
5. Comparação para memorizar

Característica	                    for	                        while	                    do...while
Verifica a condição antes?	        Sim	                        Sim	                        Não
Executa pelo menos uma vez?	        Não	                        Não	                        Sim
Ideal para	                        Repetições controladas      Repetições condicionais	    Executar primeiro e verificar depois
Pode gerar laço infinito?	        Sim	                        Sim	                        Sim

Um detalhe importante: os três podem ser utilizados em várias situações semelhantes. A escolha depende da clareza e da lógica do problema.
*/



/*
6. Quiz interativo — Teste seus conhecimentos

Responda às questões antes de conferir o gabarito comentado.
*/
console.log("Quiz interativo - Desafio — Laços de repetição")

console.log("1. O que será impresso?")
for (let int = 1 ; int <= 3 ; int++){
    console(int)
}
// 1, 2, 3
// Correto! O contador começa em 1 e o laço termina depois que i passa a valer 4. Portanto, imprime 1, 2 e 3.



console.log(" ")

console.log("2. Quantas vezes o bloco será executado?")
let n2 = 10

while( n2 < 5){
    console.log(n1)
}
//Nenhuma vez
// Correto! A condição 10 < 5 é falsa já na primeira verificação. O bloco não é executado





console.log(" ")

console.log("3. Qual será o resultado?")
let n3 = 10

do{
    console.log(n3)
} while (n3 < 5)
// 10 será impresso uma vez
// Correto! O do...while executa o bloco antes de verificar a condição. Depois de imprimir 10, a condição é falsa.




console.log(" ")

console.log("4. Qual é o problema deste código?")
let i = 1

while (i <= 3){
    console.log(i)
}
// O contador não é atualizado
// Correto! Como i nunca muda, a condição permanece verdadeira. É um laço infinito.



console.log(" ")

console.log("5. Qual estrutura garante pelo menos uma execução do bloco?")

console.log(" ")

console.log("6. Qual será a soma final?")
let soma1 = 0

for (let i = 1 ; 1 <= 4 ; i++){
    soma += i
}
    console.log(soma)

// while
// Resposta correta: do...while. No do...while, a condição só é verificada depois da primeira execução.
