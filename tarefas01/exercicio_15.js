let fibonacci = [0, 1]

for (i = 0; i < 8; i++) {
    fibonacci.push(fibonacci[i] + fibonacci[i + 1])
}

console.log(fibonacci)