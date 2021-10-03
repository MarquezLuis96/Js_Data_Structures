class MyArray {
    //Build an object
    constructor() {
        this.length = 0;
        this.data = {};
    }

    //Return the data
    get(index) {
        return this.data[index];
    }

    //Add an element into the array (last position)
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }

    //Extract the last elemente of the array
    pop() {
        const lastItem = this.data[this.length - 14];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    //Delete an especified index
    delete(index) {
        const item = this.data[index];
        this.shiftIndex(index);
        return item;
    }

    //Move all the array
    shiftIndex(index) {
        for(let i = index; i < this.length-1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
}

const myArray = new MyArray();