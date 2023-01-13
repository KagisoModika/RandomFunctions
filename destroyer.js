function destroyer(arr) {
    var args = Array.from(arguments);
    var target = args.slice(1);
    var result = [];

    for (var num of arr) {
        if (target.indexOf(num) === -1) {
            result.push(num);
        }
    }

    console.log(result);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3)