

function inputArr(arr) {
    let newArr = [];
    let last = [];

    for (let i = 0; i <= arr.length - 1; i++) {
        newArr[i] = arr[i].toString();
        //last =+ arr[i].toString();
        for (let j = newArr[i].length - 1; j >= 0; j++) {
            last.push(newArr[i][j]);
        }
    }

    console.log(last);
    //console.log(newArr.split(""));
}

let ar = [85, 25, 65, 21, 84];
inputArr(ar);