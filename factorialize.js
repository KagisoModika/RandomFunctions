function factorialize(num) {
    let factored = 1;

    if (num > 0) {
        for (let i = num; i > 0; i--) {
            factored *= i;
        }
    } else {
        factored = 1;
    }

    return factored;
}

console.log(factorialize(0));