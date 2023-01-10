function slasher(arr, numIndex) {
    var final = [];

    if (arr.length > numIndex) {
        final = arr.splice(numIndex, arr.length);
    } else {
        final = arr;
    }

    return arr;
}

slasher(["1", "2", "3"], 2);