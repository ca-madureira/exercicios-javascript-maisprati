const prompt = require("prompt-sync")()

//receba um numero e exibe a tabuada

let num = Number(prompt("Digite um numero para saber sua tabuada de 1 a 10: "))
let result = 0

for (i = 1; i <= 10; i++) {
    result = i * num
    console.log(`${i} x ${num} = ${result}`)
}