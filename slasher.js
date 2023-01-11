function slasher(arr, numIndex) {
    arr.splice(0, numIndex - 1);

    return arr;
}

slasher(["1", "2", "3", "4"], 2);