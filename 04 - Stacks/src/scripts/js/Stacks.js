class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    //Adds an element to the top of the stack
    push(value) {
        const newNode = new Node(value);
        
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        }
        else {
            const holdingPointer = this.top;

            this.top = newNode;
            this.top.next = holdingPointer;
        }

        this.length++;
        return this;
    }

    pop() {
        if (this.length === 0) {
            console.log("Exception: Underflow - The Stack is empty.");
            return this;
        }
        else if (this.length === 1) {
            this.top = null;
            this.bottom = null;
            this.length--;
            return this;
        }
        else {
            this.top = this.top.next;
            this.length--;
            return this;
        }
    }

    //Returns the top of the stack
    peek() {
        return this.top;
    }
}

let myStack = new Stack();