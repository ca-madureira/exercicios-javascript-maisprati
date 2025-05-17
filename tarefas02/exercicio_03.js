const prompt = require("prompt-sync")()
//remceba a distancia que um passageiro deseja percorrer em km. 
//calcule o preco da passagem, cobrando 0.5 por km para viagens até 200km
//0.45 para viagens mais longas

let distance = Number(prompt("Digite a distância de sua viagem: "))
let ticket = 0

if (distance > 200) {
    ticket = distance * 0.5
} else {
    ticket = distance * 0.45
}

console.log(`Você pagará R$ ${ticket} pela viagem de ${distance}km`)