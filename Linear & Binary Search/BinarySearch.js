function bs(arr, position) {
    let leftIndex = 0
    let rightIndex = arr.length - 1
    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
        if (position === arr[middleIndex]) {
            return middleIndex
        }
        if (position < arr[middleIndex]) {
            rightIndex = middleIndex - 1
        } else {
            leftIndex = middleIndex + 1
        }
    } return -1
}

console.log(bs([33, 77, 8, 3, 69], 33));