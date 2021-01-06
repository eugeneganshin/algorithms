function mergeSortedArrays(arr1, arr2) {
    
    const sorted = []
    let item1 = arr1[0]
    let item2 = arr2[0]
    let i = 1
    let j = 1

    while (item1 || item2) {
       if (!item1 || !item2 || item1 < item2) {
           sorted.push(item1)
           item1 = arr1[i]
           i++
       } else {
           sorted.push(item2)
           item2 = arr2[j]
           j++
       }

    }

    console.log(sorted)
    return sorted

}

mergeSortedArrays([1,2,3,31],[4,5,30])