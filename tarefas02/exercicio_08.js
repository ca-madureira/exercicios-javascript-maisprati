const prompt = require("prompt-sync")()
//pontos por atividade fisica
//cada hora de atividade no mes vale pontos

let horas = Number(prompt("Quantas horas de atividades você realizou no mês? "))
let pontos = 0


if (horas <= 10) {
    pontos = 2 * horas

} else if (horas > 10 && horas <= 20) {
    pontos = 5 * horas

} else {
    pontos = 10 * horas
}

let ganho = pontos * 0.05

console.log(`Você receberá R$ ${ganho} pelas ${horas} horas realizadas de atividade no mês`)