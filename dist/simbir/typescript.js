function reverseNumber(num) {
    var r = parseInt(('' + num).split('').reverse().join(''), 10);
    return r * Math.sin(num);
}
console.log(reverseNumber(-134));
