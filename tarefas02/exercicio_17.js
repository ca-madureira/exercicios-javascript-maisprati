const prompt = require("prompt-sync")()
//receber nome e idade de 9 pessoas
//vetor nome e vetor idade com indices iguais

let nomes = []
let idades = []
let nome = ''
let idade = 0
let menores = []

for (let i = 0; i < 9; i++) {
    nome = prompt("Digite seu nome: ")
    idade = parseInt(prompt("Digite sua idade: "))
    nomes.push(nome)
    idades.push(idade)
    if (idade < 18) {
        menores.push(`${nome} - ${idade}`)
    }
}

for (let i = 0; i < 9; i++) {
    console.log(`${nomes[i]} - ${idades[i]} anos`);
}

console.log(`A listagem de menores: ${menores}`)