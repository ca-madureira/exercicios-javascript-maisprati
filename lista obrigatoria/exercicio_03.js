const prompt = require("prompt-sync")()
//receba nota de 0 a 10 e classifique: aprovado, recuperacao, reprovado
//use if-else


let grade = Number(prompt("Insira sua nota: "))

if (grade < 5) {
    console.log("Reprovado")
} else if (grade >= 5 && grade < 7) {
    console.log("Recuperação")
} else {
    console.log("Aprovado")
}