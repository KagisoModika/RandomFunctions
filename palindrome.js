function palindrome(str) {
    let reverseStr = "";

    for (i = str.length - 1; i >= 0; i--) {
        reverseStr += str[i];
    }

    str = str.toLowerCase();
    reverseStr = reverseStr.toLowerCase();

    if (reverseStr === str) {
        console.log("Palindrome!");
    } else {
        console.log("Non palindrome.");
    }
}

palindrome("Eyt");