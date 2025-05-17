const prompt = require("prompt-sync")()
//receba 3 segmentos de reta e verifica se é possivel construir um triangulo
//o comprimento de cada lado deve ser menor que a soma dos outros dois

let segment = Number(prompt("Digite o comprimento do primeiro lado: "))
let segment2 = Number(prompt("Digite o comprimento do segundo lado: "))
let segment3 = Number(prompt("Digite o comprimento do terceiro lado: "))

if (segment < (segment2 + segment3) && segment2 < (segment + segment3) && segment3 < (segment + segment2)) {
    console.log("É possível construir um triângulo")
} else {
    console.log("Não é possivel construir um triângulo")
}