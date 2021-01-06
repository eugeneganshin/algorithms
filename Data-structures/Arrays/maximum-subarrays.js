function maxSub(array) {

    let max = 0

    for (let i = 0; i < array.length; i++) {
        const sum = max + array[i]
        
        if (array[i] < 0 && sum < 0) {
            max = 0
        } else {
            // max += array[i]
            max = Math.max(max, max+=array[i])
            console.log({i, val: array[i], max})
            
        }
    }
    
    console.log(max, 'max')
    return max

}

// console.log(maxSub([4,-1]))
maxSub([-2,1,-3,4,-1,2,1,-5,4])