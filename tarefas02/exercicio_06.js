const prompt = require("prompt-sync")()
//sorteio entre 1 e 5
//adivinhar numero

let sortedNumber = Math.floor(Math.random() * 5) + 1;

let guessNumber = parseInt(prompt("Escolha um número entre 1 e 5: "))

if (sortedNumber === guessNumber) {
    console.log("Acertou!!!")
} else {
    console.log(`Que pena! O numero escolhido por você foi ${guessNumber} e o número sorteado é ${sortedNumber}`)
}