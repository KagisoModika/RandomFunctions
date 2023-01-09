function chunkyMonkey(arr, size) {
    var finalArr = [];

    while (arr.length > 0) {
        finalArr.push(arr.slice(0, size));
        arr = arr.slice(size);
    }
    
    return finalArr;
}

chunkyMonkey(["a", "b", "c", "d"], 2);