const prompt = require("prompt-sync")();
//folha de pagamento de 80 empregados

let nome = ''
let matricula = ''
let salarioBruto = 0
let deducaoINSS = 0
let salarioLiquido = 0
let numeroFuncionarios = 80;
let funcionario = {}
let funcionarios = [];

for (let i = 0; i < numeroFuncionarios; i++) {
    nome = prompt(`Digite o nome do ${i + 1}º funcionário: `);
    matricula = prompt(`Digite a matrícula do ${i + 1}º funcionário: `);
    salarioBruto = parseFloat(prompt(`Digite o salário bruto do ${i + 1}º funcionário: `));
    deducaoINSS = salarioBruto * 0.12;
    salarioLiquido = salarioBruto - deducaoINSS;

    funcionario = {
        nomeFuncionario: nome,
        matriculaFuncionario: matricula,
        salarioBruto,
        deducaoINSS,
        salarioLiquido
    };

    funcionarios.push(funcionario);
}

console.table(funcionarios);
