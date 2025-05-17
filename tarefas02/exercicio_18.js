const prompt = require("prompt-sync")();
//receber nome, cargo e salario

let funcionario = {
    nome: prompt("Digite seu nome: "),
    cargo: prompt("Digite seu cargo: "),
    salario: Number(prompt("Digite seu salário: "))
};


console.log(`Nome do Funcionário: ${funcionario.nome}`);
console.log(`Cargo: ${funcionario.cargo}`);
console.log(`Salário: R$ ${funcionario.salario.toFixed(2)}`);
