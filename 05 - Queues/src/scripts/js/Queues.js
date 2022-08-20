class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    //This method adds a new element into the queue
    enqueue(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        }
        else {
            this.last.next = newNode;
            this.last = newNode;
        }

        this.length++;
        return this;
    }

    //This method removes the first element of the queue
    dequeue() {
        if (this.length === 0) {
            console.log("Exception: UNDERFLOW - No elements into the Queue.");
            return undefined;
        }
        else if (this.length === 1) {
            this.first = null;
            this.last = null;
            this.length--;
        }
        else {
            this.first = this.first.next;
            this.length--;
        }
        return this;
    }

    //Returns the first element of the queue
    peek() {
        return this.first;
    }
}

const myQueue = new Queue();