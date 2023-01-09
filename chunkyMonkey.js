function chunkyArrayGroups(arr, size) {
    var finalArr = [];

    while (arr.length > 0) {
        finalArr.push(arr.slice(0, size));
        arr = arr.slice(size);
    }

    return finalArr;

    //console.log(finalArr);
}

chunkyArrayGroups(["a", "b", "c", "d"], 2);