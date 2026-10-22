/* Nível 1 — Iniciante
Crie um objeto chamado produto com as propriedades nome, preco e disponivel. Use texto, número e booleano, respectivamente.

Objetivo: criar um objeto e reconhecer os tipos de valores.
*/

const produto = {
    nome: "Notebook Acer",
    preco: 1000.00,
    disponivel: true
};

console.log("O Produto é: ", produto.nome);
console.log("O valor do Produto R$: ", produto.preco);
console.log("Está disponivel? ", produto.disponivel);

const dados = JSON.stringify(produto);

console.log(dados);

console.log("")
console.log("")
/*
Nível 2 — Intermediário
Crie um array chamado linguagens com três linguagens de programação. Exiba a segunda linguagem no terminal.

Objetivo: praticar arrays e índices começando em zero.
*/

const linguagens = [
    "JavaScript",
    "Python",
    "Java" 
];

console.log(linguagens[1]);
console.log("")
console.log("")
/*
Nível 3 — Desafio
Crie um objeto usuario com nome, idade e habilidades. Transforme-o em uma string JSON usando JSON.stringify() e depois converta essa string de volta usando JSON.parse(). Exiba o nome do usuário convertido.

Objetivo: unir objetos, arrays, conversão e acesso a propriedades.
*/

const usuario = [
    {
    userName: "WILLIAN LOBATO",
    userAge: 33,
    userHab: true
    },
    {
    userName: "SAMUEL LOBATO",
    userAge: 4,
    userHab: false
    },
    {
    userName: "NAIARA LOBATO",
    userAge: 33,
    userHab: true
    }
];

console.log("O usuário é = ", usuario[0].userName);
console.log("A idade do usuário é = ", usuario[0].userAge);
console.log("Usuario possui Habilidades? ", usuario[0].userHab);

for (let i = 0 ; i < usuario.length; i++){
    console.log("NOME: ", usuario[i].userName);
    console.log("IDADE: ", usuario[i].userAge);
    console.log("HABILIDADE: ", usuario[i].userHab)
}

const dados1 = JSON.stringify(usuario, null, 2);

console.log(dados1);

