function mutation(arr) {
    firstWord = arr[0].toLowerCase();
    secondWord = arr[1].toLowerCase();

    for (var i = 0; i < secondWord.length; i++) {
        if (firstWord.indexOf(secondWord[i]) === -1) {
            return false;
        }
    }

    return true;
    //console.log("True");
}

mutation("Hello", "He");