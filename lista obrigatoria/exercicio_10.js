const prompt = require("prompt-sync")()

let num = parseInt(prompt("Digite um valor inteiro: "))

for (i = 0; i < 10; i++) {
    console.log(num)
}