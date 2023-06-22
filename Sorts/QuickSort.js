function quick(arr) {
    if(arr.length<2){
        return arr
    }
    let pivot = arr[arr.length-1]
    let right = []
    let left = []
    for(i=0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else
        right.push[arr[i]]
    }return [...quick(left),pivot,...quick(right)]
    }
    
    const arr = [3, 2,3.5, 7, 6, 71, 69]
    const newarr= quick()
    
    console.log(newarr);