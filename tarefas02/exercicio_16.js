const prompt = require("prompt-sync")()
//gerar 20 posicoes de 0 e 99
//vetor ordem crescente

let posicoes = []
let numeroGerado = 0

for (let i = 0; i < 20; i++) {
    numeroGerado = Math.floor(Math.random() * 100);
    posicoes.push(numeroGerado)
}

console.log(`Antes de ordenar: ${posicoes}`)

posicoes.sort((a, b) => a - b)

console.log(`Depois de ordenar: ${posicoes}`)