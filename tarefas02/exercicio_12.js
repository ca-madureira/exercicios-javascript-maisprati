let fibonacci = [1, 1]

for (i = 0; i < 6; i++) {
    fibonacci.push(fibonacci[i] + fibonacci[i + 1])
}

console.log(fibonacci)