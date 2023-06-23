function quick(arr){
    let n = arr.length-1
    if(n<2){
        return arr
    }
    let left = []
    let right = []
    let pivot = arr[n]
    for(let i=0;i<n;i++){
        if (arr[i]<pivot){
            left.push(arr[i])
        }else {
            right.push(arr[i])
        }
    }
    return [...quick(left),pivot,...quick(right)]
}

const arr = [2,4,67,69,1]
const newArr = quick(arr)
console.log(quick(arr));