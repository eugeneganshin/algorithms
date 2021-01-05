const strings = ['a', 'b', 'c', 'd']
// 4 items and if we are on 32bit system
// 4 * 4 = 16 bytes

// JS methods
// 
// push
strings.push('e') // O(1)

// pop
strings.pop() // O(1)

// unshift
strings.unshift('x') // O(n) because we change the indexes for the rest of the items

// splice
strings.splice(2, 0, 'item') // O(n) 