const prompt = require("prompt-sync")()
//menu interativo oferece ao usuario a escolha de tres opcoes. Utilize switch-case

console.log("Escolha um personagem dentre as três opções.")
console.log("Qual dos personagens tem mais vantagem no seguinte cenário:")
console.log("Lembre-se: O mapa escolhido por você foi o mapa do castelo")
console.log("1-Rei 2-Leão 3-Soldado")
let choice = parseInt(prompt("Escolha um número: "))

switch (choice) {
    case 1:
        console.log("Excelente escolha! Não há ninguem maior que o Rei para comandar o castelo")
        console.log("1000 pontos!")
        break
    case 2:
        console.log("Não foi a pior escolha, mas o castelo nao é o habitat natural do Leão.")
        console.log("200 pontos!")
        break
    case 3:
        console.log("Boa escolha! O castelo não é um ambiente desconhecido, mas o soldado não terá autonomia completa")
        console.log("500 pontos")
        break
    default:
        console.log("Que pena! Desconheço esse personagem")
}

