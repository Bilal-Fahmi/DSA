function selection(arr) {
    let n = arr.length
    for (let i = 0; i < n - 1; i++) {
        let min = i
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        if (min !== i) {
            let temp = arr[min]
            arr[min] = arr[i]
            arr[i] = temp
        }
    }
    return arr
}

console.log(selection([7, 5, 80, 69, 68]));