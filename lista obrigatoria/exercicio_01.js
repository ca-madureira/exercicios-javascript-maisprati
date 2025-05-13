const prompt = require("prompt-sync")()
//Escreva um programa que recebe um numero inteiro e verifica se ele é par ou impar utilizando uma estrutura de controle if

let isEvenNumber = parseInt(prompt("Insira um número inteiro: "))

if (isEvenNumber % 2 === 0) {
    console.log("É um número par")
} else {
    console.log("É um número impar")
}