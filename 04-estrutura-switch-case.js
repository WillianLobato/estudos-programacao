/*
Agora vamos estudar a estrutura switch case em JavaScript, que é muito útil quando precisamos comparar uma mesma variável com vários valores possíveis.

1. O que é switch case?
O switch permite que o programa escolha qual bloco de código executar com base no valor de uma expressão.

Imagine que você está criando um sistema bancário e precisa oferecer opções para o usuário:
1. Consultar saldo
2. Fazer um depósito
3. Fazer um saque
4. Sair do sistema
Podemos usar vários if / else if, mas o switch deixa esse tipo de situação mais organizado.


2. Como funciona a estrutura?

                    switch (opcao)
            O programa verifica o valor da expressão.

            case 1                  case 2
        Executa a opção 1       Executa a opção 2 

            case 3                  default
        Executa a opção 3       Nenhum caso correspondeu

Os principais comandos são:
- switch: inicia a estrutura de seleção.
- case: define um valor possível.
- break: encerra o switch para não continuar executando os próximos casos.
- default: define o que acontece quando nenhum caso corresponde ao valor.


3. Primeiro exemplo prático
Vamos criar um programa que identifica o dia da semana.
*/
let dia = 3

switch (dia){
    case 1:
        console.log("Domingo")
        break
    case 2:
        console.log("Segunda-Feira")
        break
    case 3:
        console.log("Terça-Feira")
        break
    case 4:
        console.log("Quarta-Feira")
        break
    
    default:
        console.log("Dia não cadastrado!")
}

console.log("  ")
/*
Entenda passo a passo
1. A variável dia recebe o número 3.
2. O switch verifica os valores dos case.
3. Quando encontra case 3, executa console.log("Terça-feira").
4. O break encerra a estrutura.
5. O default não é executado, porque um caso correspondente foi encontrado.
Atenção: no JavaScript, o switch compara os valores usando comparação estrita, semelhante ao ===. Portanto, 3 não corresponde a "3", pois um é número e o outro é texto.


4. Para que serve o break?
Este é um dos pontos mais importantes da matéria.

Veja o exemplo:
*/
let opcao = 1

switch (opcao){
    case 1:
        console.log("Consultar Saldo!")
    case 2:
        console.log("Fazer Deposito!")
    case 3:
        console.log("Fazer Saque!")
}
console.log("  ")
/*
O resultado será: 
Consultar saldo
Fazer depósito
Fazer saque

Por quê? Porque, sem break, o JavaScript continua executando os casos seguintes, mesmo depois de encontrar o caso correspondente. Esse comportamento é chamado de fall-through.

A forma correta, quando queremos executar apenas uma opção, seria:
*/
let opcao1 = 1

switch (opcao1){
    case 1:
        console.log("Consultar Saldo...")
        break

    case 2:
        console.log("Fazer Deposito...")
        break
    
    case 3:
        console.log("Fazer Saque...")
        break

    default:
        console.log("Opção Inválida...")
}
console.log("  ")
console.log("  ")
/*
Agora, somente Consultar saldo será exibido.

5. Quando usar switch e quando usar if / else?
| Situação                                          | Melhor escolha |

| Comparar uma variável com valores específicos     | Geralmente switch |
| Verificar intervalos numéricos                    | Geralmente if / else if |
| Combinar condições com && ou ||                   | Geralmente if / else |
| Criar um menu de opções                           | Geralmente switch |

Exemplo: 
Para descobrir se uma nota é maior ou igual a 7, usamos if. 
Para escolher uma operação entre "somar", "subtrair" e "multiplicar", podemos usar switch.

*/

console.log("Exercícios práticos")
console.log("Tente responder antes de conferir o gabarito. Os exercícios estão em ordem crescente de dificuldade.")
console.log("Quiz — Switch case")
console.log("  ")
console.log("1. O que será exibido?")
let cor = 2

switch (cor){
    case 1:
        console.log("Azul")
        break
    
    case 2:
        console.log("Verde")
        break
    
    default:
        console.log("Outra Cor")
}
// Verde
// Acertou! A variável cor vale 2, então o case 2 é executado.

console.log("  ")

console.log("2. Qual é a função do break?")
console.log("R: Encerrar o switch")
// Acertou! O break encerra a execução do switch. Sem ele, a execução pode continuar nos casos seguintes.


console.log(" ")

console.log("3. O que acontece se nenhum case corresponder e não existir default?")
switch (5) {
  case 1: console.log("Um"); break;
}
// Nada é exibido
// Acertou! O switch termina sem executar nenhum bloco. A ausência de default não é um erro.

console.log(" ")

console.log("4. Qual será o resultado?")
let valor = "2"

switch (valor){
    case 1:
        console.log("Número")
        break

    case "2":
        console.log("Texto")
        break
    
    default:
        console.log("Outro")
}
// outro
//Resposta correta: Texto O valor é a string "2". O switch compara de forma estrita e encontra case "2".

console.log(" ")

console.log("5. Qual é o resultado sem break?")
let n = 1

switch(n){
    case 1:
        console.log("A")
    
    case 2:
        console.log("B")
        break
    
    default:
        console.log("C")
}
// A
// Resposta correta: A e B. O case 1 executa A e, sem break, continua no case 2 e executa B. O break encerra o switch antes do default.


/*
7. Resumo para memorizar
- switch: seleciona entre diferentes possibilidades.
- case: representa cada valor possível.
- break: impede que a execução continue para os próximos casos.
- default: funciona como alternativa quando nenhum caso corresponde.
- A comparação é estrita: tipo e valor precisam corresponder.
*/

console.log("  ")

console.log("DESAFIO FINAL: crie um arquivo menu.js no VS Code que tenha uma variável opcao = 2 e utilize switch para imprimir:")
let opcaoDesF = 2

switch(opcaoDesF){
    case 1:
        console.logo("Consultar Salto")
        break
    
    case 2:
        console.log("Realizar depósito")
        break
    
    case 3:
        console.log("Realizar Saque")
        break

    default:
        console("Opção Inválida")
}