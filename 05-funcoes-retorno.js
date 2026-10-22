/*
Aula: Funções e retornos em lógica de programação

1. Primeiro, entenda o que é uma função
Imagine uma máquina de fazer suco.

1. Você coloca uma fruta
Entrada

2. A máquina trabalha
Função

3. Você recebe o suco
Retorno ou resultado

Uma função em programação funciona de maneira parecida:
- Você pode fornecer informações para ela.
- Ela executa instruções.
- Ela pode devolver um resultado.
Uma função também pode executar uma tarefa sem receber informações e sem devolver um valor.


2. Como criar uma função?
Veja este código:
*/

function torrar(){
    console.log("Torrando Pão! ")
}

torrar()

console.log("")
/*
Não se preocupe com os detalhes ainda. Vamos traduzir cada linha para português.

- function torrar() {
Estamos criando uma função chamada torrar.

- console.log("Torrando pão");
É a instrução que será executada. Ela mostra a mensagem no terminal.

torrar();
Estamos chamando a função. Ou seja, pedimos ao computador que a execute.

Guarde esta diferença:
- Criar a função é preparar a receita.
- Chamar a função é pedir para executar a receita.
Se você criar uma função, mas nunca a chamar, o conteúdo dela não será executado nesse exemplo.


3. Agora vamos adicionar um parâmetro
Imagine que você tem uma máquina que cumprimenta as pessoas.

Você quer que ela diga:
- Olá, Carlos!
- Olá, Maria!
- Olá, João!
Você poderia escrever três funções diferentes, mas isso seria desnecessário. Podemos criar uma função que recebe o nome da pessoa.
*/

function saudar(nome){
    console.log("Olá " + nome)
}

saudar("Carlos")
saudar("Maria")
saudar("João")

console.log("")

/*
Entenda o que acontece
Quando escrevemos:
saudar("Carlos");


O computador recebe a instrução para executar a função saudar com o valor "Carlos".

Dentro da função, a palavra nome passa a representar esse valor durante a execução. Por isso, o computador mostra 

Olá, Carlos.

Na próxima chamada, saudar("Maria"), o valor será "Maria".

O que é um parâmetro?
No exemplo, nome é o parâmetro:
function saudar(nome)

E "Carlos" é o argumento:
saudar("Carlos");

Pense assim:
- Parâmetro = espaço reservado para receber uma informação.
- Argumento = informação que você envia para esse espaço.


4. Uma função pode receber dois parâmetros
Vamos criar uma calculadora simples.

/*/

function somar(num1, num2){
    console.log(num1 + num2)
}
somar (5, 3)

console.log(" ")

/*

5. Agora vem a parte mais importante: o return
Este conceito costuma gerar confusão no início, então vamos devagar.

Observe esta função:
*/

function somar1( a, b){
    console.log(a + b)
}

somar1(5, 3)

console.log(" ")

/*
Ela mostra 8 no terminal. Mas imagine que queremos guardar esse resultado em uma variável para utilizá-lo depois.

É aí que entra o return.

Veja a versão abaixo:
*/
console.log("____________________________")

function somar3(a, b){
    console.log(a + b)
}

let resultado = somar3(5, 3)

console.log(resultado)

console.log("")

/*
Mas agora a função devolveu o valor 8, que foi guardado na variável resultado.
Entenda a diferença entre console.log() e return

-> console.log()
Mostra uma informação no terminal.
    console.log(5 + 3);

-> return
Devolve um valor para o código que chamou a função.
    return 5 + 3;

Uma comparação do dia a dia:
- console.log() é como mostrar a conta para alguém.
- return é como entregar o resultado da conta para alguém usar.
Uma função pode usar os dois, mas eles não fazem a mesma coisa.

6. Vamos acompanhar o return passo a passo
Leia este código:
*/
console.log("____________________________")
function somar3(a, b){
    return a + b
}

let resultado1 = somar3(5, 3)
let dobro = resultado1 * 2

console.log(dobro)

/*
O computador executa assim:
1. Chamamos somar(5, 3).
2. A função calcula 5 + 3, que é 8.
3. O return devolve 8 para a chamada da função.
4. resultado recebe o valor 8.
5. dobro recebe 8 * 2, ou seja, 16.
6. console.log(dobro) mostra 16 no terminal.
Portanto, a saída final é: 16 

Perceba: sem o retorno da soma, não teríamos esse valor devolvido pela função para utilizá-lo dessa maneira.
*/

console.log("____________________________")

/*
7. Entendendo o exemplo do seu professor: getFirstName()
Agora que você já entendeu funções, parâmetros e retorno, vamos voltar ao exemplo original.
*/

function getFirstName(name, splitChar){
    let firstName = name.split(splitChar)[0]
    return firstName
}

let userName = getFirstName("Carlos-Almeida-Juanito", "-")

console.log("Seja bem - vindo " + userName)