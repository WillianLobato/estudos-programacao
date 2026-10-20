/*
Aula de JavaScript: Funções com Parâmetros

1. O que são funções com parâmetros?
Uma função é um bloco de código criado para executar uma tarefa. Os parâmetros permitem que você passe informações para essa função.

Imagine uma máquina de fazer suco:

        Maçã                        Laranja
            FUNÇÃO: fazerSuco(fruta)
            Recebe um ingrediente (parâmetro)

            Resultado: suco da fruta escolhida

A função é a máquina, o parâmetro é a informação que você fornece e o resultado depende dessa informação.
*/

// 2. Primeiro exemplo em JavaScript

function saudacao(nome){
    console.log("Olá, " + nome + "!")
}

saudacao("Willian")
saudacao("Maria")
saudacao("João")

/*
Vamos entender cada parte:

1. Declaração
function saudacao(nome)
Criamos uma função chamada saudacao que recebe um parâmetro chamado nome.

2. Execução
console.log("Olá, " + nome + "!")
A função utiliza o valor recebido para montar a mensagem.

3. Chamada
saudacao("Willian")
Executamos a função e passamos "Willian" como argumento.


Atenção a esta diferença:
- Parâmetro: nome — a variável declarada na definição da função.
- Argumento: "Willian" — o valor passado quando chamamos a função.
Essa diferença é muito importante para entender programação.

*/

// 3. Funções com dois parâmetros 
// Agora imagine uma função que soma dois números.
function somar (a, b){
    console.log(a + b)

}

somar (10, 5)
somar (20, 30)
somar (7,3 )

/*
O que acontece?
Chamada	            Parâmetro a	    Parâmetro b	    Resultado
somar(10, 5)	    10	            5	            15
somar(20, 30)	    20	            30	            50
somar(7, 3)	        7	            3	            10

A função é a mesma. O que muda são os argumentos fornecidos a cada chamada.
*/

// 4. E para que serve o return?
// observe dois exemplos:
function somar(a, b) {
    console.log(a + b);
} // Essa função mostra o resultado na tela.


function somar(a, b) {
    return a + b;
}

let resultado = somar(10, 5);

console.log(resultado);

console.log("----------------");

/*
O resultado também será 15, mas existe uma diferença importante:
- console.log() exibe uma informação no terminal.
- return devolve um valor para quem chamou a função, permitindo armazená-lo ou utilizá-lo em outros cálculos.

Por exemplo:
*/

function somar(a, b) {
    return a + b;
}

let resultado1 = somar(10, 5);
let dobro = resultado1 * 2;

console.log(dobro);

console.log("----------------");
console.log("");



console.log(" 5. Vamos praticar?")

console.log("Exercício 1 · Iniciante - Analise o código:")
function multiplicar(a, b){
    return a * b
}
console.log(multiplicar (4, 3))
//A função recebe a = 4 e b = 3. O operador * realiza a multiplicação: \(4 \times 3 = 12\). O return devolve o resultado, que é exibido pelo console.log().

console.log("");
console.log("----------------");
console.log("");


/*
Perfeito! Agora entendi como o seu professor está ensinando na DIO. Vamos seguir a mesma lógica e o mesmo estilo de código do curso, sem complicar com conceitos que você ainda não estudou.

Seu professor começou com a criação e a chamada de funções e, em seguida, apresentou funções que recebem parâmetros. Vamos entender como essas partes se conectam.

1. Entendendo o código do professor
Veja o primeiro exemplo:
*/

torrar()

function torrar(){
    console.log("Torrando Pão")
    injetarPao()
}

function injetarPao(){
    console.log("Preparando para injetar o Pão")
    console.log("Finalizado")
}


console.log("");
console.log("----------------");
console.log("");

/*
Vamos entender a execução passo a passo.

1 - torrar()
O programa chama a função torrar, ou seja, pede que ela seja executada.

2 - console.log("torrando pão")
A primeira mensagem é exibida no terminal.

3 - injetarPao()
A função torrar chama outra função, que executa suas próprias instruções.

Uma informação importante: uma função pode chamar outra função. Isso permite dividir um programa em tarefas menores e organizar melhor o código.
*/

// 2. Agora vamos para funções com parâmetros 
//Este é o exemplo do professor:

function saudar(nome) {
    console.log("Olá, " + nome + "! Como você está?");
}

saudar("Pedrinho");
saudar("Mariana");


console.log("");
console.log("----------------");
console.log("");

/*
Observe os três elementos principais:

PARÂMETRO
nome
É a variável que recebe a informação dentro da função.

ARGUMENTO
"Pedrinho"
É o valor enviado quando chamamos a função.

CHAMADA DA FUNÇÃO
saudar("Pedrinho")
É o comando que executa a função, passando o nome desejado.

Pense assim: o parâmetro é um espaço reservado para receber uma informação. Cada vez que você chama a função, pode fornecer uma informação diferente.
*/

// 3. Vamos modificar o exemplo do professor
// Imagine que queremos criar uma função para torrar pães de pessoas diferentes.

function torrar(nome) {
    console.log("Torrando pão para " + nome);
}

torrar("Willian");
torrar("Maria");
torrar("João");
// Percebeu a vantagem? Criamos a função uma única vez e reutilizamos o código com diferentes argumentos.


console.log("");
console.log("----------------");
console.log("");


console.log("Hora de praticar - Analise este código: - Qual será a saída no terminal?")
function apresentar (nome){
    console.log("Meu nome é " + nome)
}

apresentar("Calors")
apresentar("Ana")

console.log("");
console.log("----------------");
console.log("");