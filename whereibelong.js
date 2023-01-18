function whereibelong(arr, num) {
    arr.sort(function(a, b) {
        return a - b
    });

    for (var i = 0; i < arr.length; i++) {
        if (num <= arr[i]) {
            return i;
        }
    }

    return arr.length;
}

whereibelong([5, 9, 2], 7);