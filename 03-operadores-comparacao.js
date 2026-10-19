//Operadores de comparação (Relacionais)

let marca = "Apple"

console.log(marca !== "Samsung")

/*

=   É atribuição
==  É para comparar o valor
=== É par comparar o valor e o formatodo conteúdo
!== É diferente ?

*/

// Guardar o valor em uma variável de resultados TRUE ? FALSE
let marca2 = "Apple"
let resultado = marca2 === "Samsung"

console.log(resultado)

//guardar o valor em uma variável de resultado TRUE?FALSE
let cpfBloqueado = "123.445.222-45"
let cpfUsuario = "222.111.222-09"
let ehCPFBloqueado = cpfUsuario === cpfBloqueado

console.log("O usuario está barrado ? " + ehCPFBloqueado)



let CPFPermitido = "222.555.333-02"
let CPFDoUsuario = "222.555.333-02"

let ehBloqueado = CPFDoUsuario !== CPFPermitido

console.log("é um usuario invalido ? " + ehBloqueado)




let idadeMinima = 18
let idadeUsuario = 18
let idadePermitidaValida = idadeUsuario >= idadeMinima

console.log(idadePermitidaValida)



let idadeDeCorte = 50
let idadeUsuario2 = 50

let resultadoEhTerceiraIdade = idadeDeCorte <= idadeUsuario2
console.log(resultadoEhTerceiraIdade)