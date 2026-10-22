class formaDeBolo {
    constructor(saborDaMassa, saborRecheio){
        this.saborDaMassa = saborDaMassa;
        this.saborRecheio = saborRecheio;
    }

    escrever(){
        console.log(`Um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborRecheio}`)
    }
}

let boloFesta = new formaDeBolo ("Massa de Chocolate","Nutella");

boloFesta.escrever();

console.log(" ")
console.log(" ")
// ###################################################################
// ###################################################################
// ###################################################################
// ###################################################################
/*
Introdução a Classes e Objetos
Imagine que você está desenvolvendo um sistema para uma loja de informática.

Você precisa cadastrar vários notebooks. Todos têm características semelhantes:
- Marca
- Modelo
- Preço
- Estado de disponibilidade
Cada notebook pode ter valores diferentes, mas compartilha a mesma estrutura.

É aí que entram as classes e os objetos.
Classe: Notebook

O modelo que define quais informações e comportamentos um notebook terá.

Marca, modelo, preço e método para exibir informações.

Objeto 1
Acer Aspire
R$ 2.500


Objeto 2
Lenovo IdeaPad
R$ 3.200

Guarde esta ideia: a classe é o modelo; o objeto é uma instância criada a partir desse modelo.

2. Entendendo a relação entre classe e objeto
Você já criou um objeto JavaScript assim:
*/
const produto = {
    nome: "NOTEBOOK ACER",
    preco: 2500.00,
    disponivel: true
};

console.log(produto.nome);

console.log(" ")
console.log(" ")

//Esse código cria um objeto diretamente, sem precisar de uma classe.
//Agora vamos criar um modelo que permita construir vários produtos.
class Product {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
}

const product1 = new Product("Notebook Acer", 2500);
const product2 = new Product("Notebool Lenovo", 3200);

console.log(product1.name);
console.log(product2.name);

console.log(" ")
console.log(" ")

/*
Criando objetos na prática
Vamos usar um exemplo próximo da sua rotina de estudos: um sistema que cadastra alunos de programação.
*/

class Aluno {
    constructor(nome, idade, curso){
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
    }
}

const aluno1 = new Aluno("Willian Lobato", 33, "JavaScript");
const aluno2 = new Aluno("Samuel Maschetto", 4, "Python");

console.log(aluno1.nome);
console.log(aluno2.curso);

console.log(" ")
console.log(" ")

/*
Trabalhando com métodos e propriedades

Até agora, os objetos armazenam informações. Mas eles também podem executar ações.
- Propriedades: representam informações ou características.
- Métodos: são funções definidas dentro da classe, que representam comportamentos.
Vamos acrescentar um método à nossa classe Aluno.
*/

class Aluno1{
    constructor(nome1, curso1){
        this.nome1 = nome1;
        this.curso1 = curso1;
    }

    apresentar(){
        console.log(`Olá! Meu nome é ${this.nome1}.`);
        console.log(`Estou esudando ${this.curso1}.`);
    }
}

const professor = new Aluno1("Willian","JavaScript");

professor.apresentar();
