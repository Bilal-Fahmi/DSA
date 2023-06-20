function ls(arr, pos) {
    for (let i = 1; i <= arr.length; i++) {
        if (arr[i] == pos) {
            return i+1
        }else return -1
    }
}

console.log(ls([69,73,8,5],73));
