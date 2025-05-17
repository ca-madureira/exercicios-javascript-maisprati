const prompt = require("prompt-sync")()
//receba 7 nomes

let name = ''
let names = []

for (let i = 0; i < 7; i++) {
    name = prompt("Digite o nome: ")
    names.push(`${i} -  ${name}`)
}

console.log(names)