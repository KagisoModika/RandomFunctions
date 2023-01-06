function truncateString(str, num) {
    let newStr = "";
    
    if (str.length >= 3) {
        //TO-DO: Cut to length of 3
        newStr = str.substring(0, num) + "...";
    } else {
        newStr = str;
    }
    
    //return newStr;
    console.log(newStr);
}

truncateString("Hello world.", 4);