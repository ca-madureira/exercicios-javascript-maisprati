const prompt = require("prompt-sync")()
//classificacao de triangulo

let sideTriangle1 = Number(prompt("Digite o valor do primeiro lado do triângulo: "))
let sideTriangle2 = Number(prompt("Digite o valor do segundo lado do triângulo: "))
let sideTriangle3 = Number(prompt("Digite o valor do terceiro lado do triângulo: "))

if (sideTriangle1 === sideTriangle2 && sideTriangle2 === sideTriangle3) {
    console.log("Triangulo Equilatero")
} else if (sideTriangle1 === sideTriangle2 && sideTriangle2 === sideTriangle3) {
    console.log("Triângulo Isosceles")
} else if (sideTriangle1 !== sideTriangle2 && sideTriangle1 !== sideTriangle3 && sideTriangle2 !== sideTriangle3) {
    console.log("Triângulo Escaleno")
}