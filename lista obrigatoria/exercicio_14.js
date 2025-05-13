const prompt = require("prompt-sync")();

// calcular o fatorial de um número
let num = parseInt(prompt("Digite um número para calcular seu fatorial: "));
let fatorial = 1;

while (num >= 1) {
    fatorial *= num;
    num--;
}

console.log(`Fatorial: ${fatorial}`);
