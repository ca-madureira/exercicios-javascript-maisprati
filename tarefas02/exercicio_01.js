const prompt = require("prompt-sync")()
//calcular reducao do tempo de vida de um fumante
//receber a quantidade de cigarros por dia e quantos anos ele ja fumou
//considere que um fumante perde 10 min de vida a cada cigarro.
//calcule quantos dias de vida um fumante perderá e exiba o total em dias

const quantidadeCigarros = parseInt(prompt("Quantos cigarros voce fuma por dia? "))
const anosDeCigarros = parseInt(prompt("Há quantos anos você anda fumando? "))

const perdaDiasVida = (quantidadeCigarros * 10 * 365 * anosDeCigarros) / 60 / 24

console.log(`Você perdeu ${perdaDiasVida} dias de vida`)






