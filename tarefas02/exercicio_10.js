const prompt = require("prompt-sync")()
//leia cada laco um numero
//mostre a soma, menor numero digitado, media entre todos e quantos sao pares

let numeros = []
let continuar = 1
let menor = null
let media = 0
let soma = 0
let cont = 0
let pares = []

while (continuar != 0) {
    let numero = Number(prompt("Digite o numero: "))
    numeros.push(numero)
    cont++
    soma += numero

    if (menor) {
        if (menor > numero) menor = numero
    }

    if (numero % 2 === 0) {
        if (!pares.includes(numero)) pares.push(numero)

    }


    continuar = prompt("Deseja continuar? 1 - continuar 2- Parar: ")
}

media = soma / cont
console.log(`Soma: ${soma}`)
console.log(`Media: ${media}`)
console.log(`Pares: ${pares}`)