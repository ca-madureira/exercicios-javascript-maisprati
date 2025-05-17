const prompt = require("prompt-sync")()
//receba 10 numeros
//mostre numeros pares

let numero = 0
let vetor = []
let pares = []

for (let i = 0; i < 10; i++) {
    numero = parseInt(prompt("Digite um numero: "))
    vetor.push(numero)
    if (numero % 2 === 0) {
        pares.push(`valor ${numero} no indice ${i}`)
    }

}

console.log(pares)


