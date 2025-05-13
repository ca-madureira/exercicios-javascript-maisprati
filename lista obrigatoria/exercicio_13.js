const prompt = require("prompt-sync")()

//receber numeros decimais e sair do laco ao digitar 0 e calular media aritmetica

let numDecimal = 0
let total = 0
let media = 0
let quantityNum = 0

do {
    numDecimal = Number(prompt("Digite um valor diferente de 0 para continuar e 0 para parar: "))
    if (numDecimal === 0) break
    total += numDecimal
    quantityNum += 1
} while (numDecimal !== 0)

console.log("total", total)
console.log("comprimento", quantityNum)
media = total / quantityNum
console.log(`A media é: ${media}`)