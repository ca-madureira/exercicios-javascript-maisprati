const prompt = require("prompt-sync")();

let parar = 1;
let habitantes = [];
let somaFilhos = 0;
let somaSalarial = 0;
let rendaBaixa = 0;
let maior = 0;

function pesquisaDemografica() {
    while (parar !== 0) {
        let salario = Number(prompt("Digite seu salario: "));
        let filhos = Number(prompt("Digite quantos filhos tem: "));
        parar = Number(prompt("0-Parar 1-Continuar "));

        let habitante = { salario, filhos };
        habitantes.push(habitante);
    }

    for (let pessoa of habitantes) {
        somaFilhos += pessoa.filhos;
        somaSalarial += pessoa.salario;

        if (pessoa.salario <= 350) {
            rendaBaixa++;
        }

        if (pessoa.salario > maior) {
            maior = pessoa.salario;
        }
    }

    const mediaFilhos = somaFilhos / habitantes.length;
    const mediaSalarial = somaSalarial / habitantes.length;
    const percentual = (rendaBaixa / habitantes.length) * 100;


    console.log(`O maior salário é: R$ ${maior.toFixed(2)}`);
    console.log(`A média salarial é: R$ ${mediaSalarial.toFixed(2)}`);
    console.log(`A média de filhos é: ${mediaFilhos.toFixed(2)}`);
    console.log(`O percentual de pessoas com salário até R$350,00 é: ${percentual.toFixed(2)}%`);
}

pesquisaDemografica();
