const prompt = require("prompt-sync")()
//receba salario e sexo do funcionario
//mostre o total de salario dos homens e das mulheres
//o programa vai perguntar ao usuario se ele quer continuar ou nao 

let sexo = 0
let salario = 0
let totalMulheres = 0
let totalHomens = 0
let parar = 1

while (parar !== 0) {
    console.log('Digite o número correspondente ao seu sexo:')
    sexo = parseInt(prompt("1-Homem 2-Mulher:"))
    salario = Number(prompt("Qual seu salario? "))

    switch (sexo) {
        case 1:
            totalHomens += salario;
            break
        case 2:
            totalMulheres += salario;
            break
        default:
            console.log("valor invalido")
    }

    parar = parseInt(prompt("1-Continuar 0-Parar: "))
}


console.log(`A soma dos salario das mulheres é de R$ ${totalMulheres.toFixed(2)}`)
console.log(`A soma dos salarios dos homens é de R$ ${totalHomens.toFixed(2)}`)