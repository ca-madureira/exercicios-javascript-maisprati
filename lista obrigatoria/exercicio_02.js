const prompt = require("prompt-sync")()
//Crie um programa que classifica a idade de uma pessoa. 
//estrutura if-else

const age = parseInt(prompt("Insira sua idade: "))

if (age < 11) {
    console.log("Você é criança")
} else if (age === 11) {
    console.log("Você é pré-adolescente")
} else if (age > 11 && age < 18) {
    console.log("Você é adolescente")
} else if (age >= 18 && age < 60) {
    console.log("Você é adulto")
} else {
    console.log("Você é idoso")
}


