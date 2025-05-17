const prompt = require("prompt-sync")();
//recebe altura e sexo da pessoa
//peso ideal = 72.7 x alt-58 para homens
//peso ideal = peso ideal = 62.1 x alt-44.7

let altura = Number(prompt("Qual sua altura? "))
let sexo = parseInt(prompt("Qual seu sexo? 1-Homem 2-Mulher: "))
let pesoIdeal = 0

function calculaPesoIdeal(altura, sexo) {
    switch (sexo) {
        case 1:
            pesoIdeal = 72.7 * altura - 58
            console.log(pesoIdeal.toFixed(2), 'kg')
            break
        case 2:
            pesoIdeal = 62.1 * altura - 44.7
            console.log(pesoIdeal.toFixed(2), 'kg')
            break
        default:
            console.log("valor invalido")
    }
}

calculaPesoIdeal(altura, sexo)