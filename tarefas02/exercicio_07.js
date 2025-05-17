const prompt = require("prompt-sync")()
//carro popular: 90/dia - ate 100km: 0,2/km - >100km:0,1/km
//carro luxo: 150/dia-ate200km:0,3 - >200/km:0,25/km

let tipoCarro = parseInt(prompt("Qual carro você alugou? 1-Carro popular 2-Carro de Luxo: "))
let dias = parseInt(prompt("Quantos dias de uso do carro? "))
let km = parseFloat(prompt("Quantos quilometros foram percorridos: "))
let aluguel = 0


if (tipoCarro === 1) {
    if (km <= 100) {
        aluguel = (90 * dias) + (0.2 * km)
    } else {
        aluguel = (90 * dias) + (0.1 * km)
    }
} else if (tipoCarro === 2) {
    if (km <= 200) {
        aluguel = (150 * dias) + (0.3 * km)
    } else {
        aluguel = (150 * dias) + (0.25 * km)
    }
} else {
    console.log("Valor invalido")
}

console.log(`O valor do aluguel saiu por R$ ${aluguel.toFixed(2)}`)