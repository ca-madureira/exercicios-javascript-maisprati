const prompt = require("prompt-sync")();

// Regras:
// Tesoura ganha de Papel
// Papel ganha de Pedra
// Pedra ganha de Tesoura

const options = ["Papel", "Tesoura", "Pedra"];

console.log("Bem-vindo(a) ao jogo JoKenPo!");
console.log("Escolha uma opção:");
console.log("1 - Papel");
console.log("2 - Tesoura");
console.log("3 - Pedra");

const choice = parseInt(prompt("Digite sua escolha (1-3): "));


const playerChoice = options[choice + 1];
const computer = Math.floor(Math.random() * 3);
const computerChoice = options[computer + 1];

console.log(`\nVocê escolheu: ${playerChoice}`);
console.log(`O computador escolheu: ${computerChoice}\n`);

if (playerChoice === computerChoice) {
    console.log("Empate!");
} else if (
    (playerChoice === "Papel" && computerChoice === "Pedra") ||
    (playerChoice === "Tesoura" && computerChoice === "Papel") ||
    (playerChoice === "Pedra" && computerChoice === "Tesoura")
) {
    console.log("Você ganhou!");
} else {
    console.log("Você perdeu.");
}
