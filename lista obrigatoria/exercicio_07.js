const prompt = require("prompt-sync")()
//maças custam 0,30 se forem compradas menos que uma duzia
//0,25 se forem compradas pelos menos doze

let numApple = parseInt(prompt("Quantas maçãs você deseja comprar? "))
let total = 0

if (numApple < 12) {
    total = numApple * 0.3
    console.log(`Você comprou ${numApple} maçãs e o total a ser pago é R$ ${total}`)
} else {
    total = numApple * 0.25
    console.log(`Você comprou ${numApple} maçãs e o total a ser pago é R$ ${total}`)
}