// AND ( && )
let idade = 18
let vistoVerificado = false
let resultado = (idade >= 18) && (vistoVerificado === true) 

console.log(resultado)


// AND ( && ) - 100 moedas coletadas E 1 item estrela
let moedasColetadas = 99
let item = "estrela"
let resultado2 = (moedasColetadas >= 100) && (item === "estrela")
console.log(resultado2)

// OR ( || ) - nosso boneco só pode sair se tiver sem chuva OU com guarda Chuva
let tempo = "chuva"
let item2 = "guarda chuva"
let podeSair = (tempo !== "chuva") || (item2 === "guarda chuva")
console.log("nosso personagem pode sair ? " + podeSair)

// NOT  ( !) - nega uma afirmação
let tempo3 = "chuva"
let resultado3 = tempo3 === "chuva"
console.log(!!resultado3)

// NOT  ( !) - nega uma afirmação
let tempo4 = "chuva"
let horario = 8
let resultado4 = !((tempo4 !== "chuva") && (horario > 6))
console.log(resultado4)