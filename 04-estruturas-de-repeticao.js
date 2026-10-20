/*
Vamos continuar nossa jornada em Lógica de Programação com JavaScript, agora estudando as estruturas de repetição: for, while e do...while. 👨‍💻

Esse conteúdo é essencial para quem quer trabalhar com desenvolvimento de sistemas e Inteligência Artificial, pois permite processar listas de dados, repetir cálculos e automatizar tarefas.

1. O que são estruturas de repetição?
Imagine que você precisa mostrar os números de 1 até 100 no terminal.

Sem uma estrutura de repetição, teria que escrever 100 comandos console.log(). Com um laço, consegue fazer isso em poucas linhas!

for — repetição controlada
Ideal quando você sabe quantas vezes deseja repetir algo, como percorrer uma lista.

while — repetição condicionada
Ideal quando a repetição deve continuar enquanto uma condição for verdadeira.

do...while — executar antes de verificar
Ideal quando você precisa executar o bloco pelo menos uma vez, mesmo que a condição seja falsa.


2. Estrutura for
O for é utilizado quando queremos repetir uma tarefa controlando o início, a condição de continuidade e a atualização do contador.
Exemplo 1 — Contar de 1 até 5
*/
for( let i = 1 ; i <= 5 ; i++ ){
    console.log(i)
}

console.log(" ")
console.log(" ")
/*
    Entenda cada parte

    for (let i = 1; i <= 5; i++) {

        let i = 1   Inicialização: cria o contador i, começando em 1. É executada uma vez.
        i <= 5      Condição: o laço continua enquanto i for menor ou igual a 5.
        i++         Incremento: aumenta o contador em 1 depois de cada execução do bloco.


Perceba que o contador chega a 6, mas o número 6 não é impresso. A condição é verificada antes de uma nova execução do bloco.

*/
console.log("Exemplo 2 — Somar números")
console.log("Agora vamos usar o for para calcular a soma de 1 até 5.")
let soma = 0

for( let i = 1 ; i <= 5 ; i++){
    soma = soma + i
}

console.log("Soma: ", soma)

/*
A variável soma acumula os valores: \(1 + 2 + 3 + 4 + 5 = 15\).

Dica: soma += i é uma forma abreviada de escrever soma = soma + i.
*/

console.log(" ")
console.log(" ")

/*
3. Estrutura while
O while repete um bloco de código enquanto a condição for verdadeira.

Diferentemente do for, a inicialização e a atualização do contador ficam separadas da declaração do laço.
*/
console.log("Exemplo — Contar de 1 até 5")
let contador = 1

while ( contador <= 5){
    console.log(contador)
    contador++
}

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

console.log(" ")

console.log("2. Quantas vezes o bloco será executado?")
let n2 = 10

while( n2 < 5){
    console.log(n1)
}
//Nenhuma vez

console.log(" ")

console.log("3. Qual será o resultado?")
let n3 = 10

do{
    console.log(n3)
} while (n3 < 5))

console.log(" ")

console.log("4. Qual é o problema deste código?")
let i = 1

while (i <= 3){
    console.log(i)
}



console.log(" ")
console.log("________________________________________")
console.log(" ")



