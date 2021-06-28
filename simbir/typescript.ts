function reverseNumber(num:number): number {

    let r = parseInt(('' + num).split('').reverse().join(''),10)
    return r * Math.sign(num)
}

console.log(reverseNumber(-134))