function repeatStrNumTimes(str, num) {
    for (let i = 0; i <= num - 1; i++) {
        console.log((i + 1) + ": " + str);
    }
}

repeatStrNumTimes("Hi", 3);