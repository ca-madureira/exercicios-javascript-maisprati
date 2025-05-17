const prompt = require("prompt-sync")()
//recebe 5 numeros e calcula a soma
//use for

let num = 0
let total = 0

for (i = 0; i <= 4; i++) {
    num = Number(prompt("Digite um número: "))
    total += num
}

console.log(`A soma é ${total}`)