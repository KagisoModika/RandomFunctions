function titleCased(str) {
    let words = str.toLowerCase().split(" ");
    var final = "";

    for (var i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }

    final = words.join(" ");

    console.log(final);
}

titleCased("I am not your fool.");

