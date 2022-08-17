class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedLists {
    constructor(value) {
        this.head = {
            value: value,
            prev: null,
            next: null
        }

        this.tail = this.head;

        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }

    //Return the node corresponding to a certain index
    getNode(index) {
        if (index > this.length - 1) {
            console.log("Exception: Index out of bounds.");
            console.log("The index doesn't exist.");
            return undefined;
        }

        let counter = 0;
        let currentNode = this.head;

        while(counter < index) {
            currentNode = currentNode.next;
            counter++;
        }

        return currentNode;
    }

    //Return the node index corresponding to acertain key
    getKeyIndex(key) {
        let index = 0;
        let currentNode = this.head;

        while (currentNode.value !== key) {
            if (currentNode.next == null) {
                console.log("Key not found");
                return undefined;
            }
            
            currentNode = currentNode.next;
            index++;
        }

        return index;
    }
}

let myDoublyLinkedList = new DoublyLinkedLists(1);
myDoublyLinkedList.append(2);
myDoublyLinkedList.append(3);
myDoublyLinkedList.append(4);
myDoublyLinkedList.append(5);