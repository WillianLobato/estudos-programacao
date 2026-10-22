//JSON - JavaScript Object Notation
// chave e valor com o objetivo de transferir dados

let name = "Willian Lobato";
let age = 33;
let products = ["Mouse","Teclado","Monitor"];
let productsValue = [29.90,129.99, 899,99];

generateInvoice(name, products, productsValue, age)

function generateInvoice(name, products, age){
    console.log("O comprador é " + name);
    console.log("A idade é" + age)
    console.log("---------------------------")
    console.log("O Produto é "+ products[0]);
    console.log("O valor é " + productsValue[0])
}
// acima está Sem o JSON
console.log("")
console.log("---------------------------")
console.log("")

// Utilizando JSON

let invoice = {
    name1: "Lobato LObato",
    age1: 33,
    products1: {
        0: ["Mouse&Mouse", 29.90], 
        1: ["Teclado&Teclado", 129.99],
        2: ["Monior&Monitor",899.99],
        3: ["TV 100' Polegadas", "10000.90"],
    },
    taxes: "98.90"
}

generateInvoice1(invoice)

function generateInvoice1(invoice){
    console.log(`O comprador é ${invoice.name1}`);
    console.log(`A idade é ${invoice.age1}`)
    console.log("---------------------------")

    for( let index in invoice.products1){
            let [productName, productPrice] = invoice.products1[index]
            console.log(` - ${productName}: R$ ${productPrice}`)
    }
   
}