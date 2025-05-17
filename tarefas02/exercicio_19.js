const prompt = require("prompt-sync")();
//receber 5 horarios
//validar para o formato HH.MM.SS

for (let i = 0; i < 5; i++) {
    let horas = prompt("Digite as horas (00 à 23): ")
    if (horas > 23) horas = '00'

    let minutos = prompt("Digite os minutos (00 à 59): ")
    if (minutos > 59) minutos = '00'

    let segundos = prompt("Digite os segundos (00 à 59): ")
    if (segundos > 59) segundos = '00'

    let horario = horas + minutos + segundos
    let novoHorario = horario.substring(0, 6)

    console.log(`Horario: ${novoHorario[0]}${novoHorario[1]}.${novoHorario[2]}${novoHorario[3]}.${novoHorario[4]}${novoHorario[5]}`)
}
