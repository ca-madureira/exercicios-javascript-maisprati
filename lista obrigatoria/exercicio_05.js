const prompt = require("prompt-sync")()
//calculo do indice de massa corporal

let weight = Number(prompt("Qual seu peso? "))
let height = Number(prompt("Qual sua altura? "))

let imc = weight / (height * height)
console.log("Seu imc", imc.toFixed(2))

if (imc < 18.5) {
    console.log("baixo peso")
} else if (imc >= 18.5 && imc <= 24.9) {
    console.log("Peso normal")
} else if (imc >= 25 && imc < 29.9) {
    console.log("Sobrepeso")
} else if (imc >= 30 && imc <= 34.9) {
    console.log("Obesidade grau I")
} else if (imc >= 35 && imc <= 39.9) {
    console.log("Obesidade grau II")
} else {
    console.log("Obesidade grau III")
}