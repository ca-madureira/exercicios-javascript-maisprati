const prompt = require("prompt-sync")()
//recebe dois valores diferentes
//ordem crescente

let num1 = Number(prompt("Digite o valor do priemiro numero: "))
let num2 = Number(prompt("Digite o valor do segundo numero: "))
let aux = 0

if (num1 > num2) {
    let aux = num1
    num1 = num2
    num2 = aux
    console.log(num1, "-", num2)
} else {
    console.log("Ja esta em ordem crescente")
    console.log(num1, "-", num2)
}