const prompt = require("prompt-sync")()
//receber o primeiro termo e a razao de uma PA
//mostra os 10 primeiros
//soma de todos os valores

let primeiroTermo = Number(prompt("Digite o primeiro termo: "));
let razao = Number(prompt("Digite a razão: "));

let sequencia = [];
let soma = 0;


for (let i = 0; i < 10; i++) {
    let termo = primeiroTermo + i * razao;
    sequencia.push(termo);
    soma += termo;
}

console.log(sequencia)