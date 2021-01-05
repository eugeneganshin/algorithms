class CustomArray {
    constructor() {
        this.length = 0
        this.data = {}
    }

    get(index) {
        return this.data
    }

    push(item) {
        this.data[this.length] = item
        this.length++
        return this.length
    }

    pop() {
        const lastItem = this.data[this.length - 1]
        delete this.data[this.length - 1]
        this.length--
        return lastItem
    }

    delete(index) {
        const item = this.data[index]
        this._shiftItems(index)
    }

    _shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i+1]
        }

        delete this.data[this.length - 1]
        this.length--
    }
}

const newArr = new CustomArray()
newArr.push(1)
newArr.pop()
console.log(newArr)