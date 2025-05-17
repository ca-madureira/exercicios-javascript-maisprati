const prompt = require("prompt-sync")()
//receba a velocidade de um carro. 
//Caso ultrapasse 80km/h, exiba uma mensagem de multa.
//exiba valor, cobrando 5,00 por cada km acima da velocidade permitida

let vel = Number(prompt("Em que velocidade você está em km/h? "))


if (vel > 80) {
    let multa = vel * 5;
    console.log(`Atenção! Acima da velocidade permitida. Sua multa é de R$ ${multa}`);
}


