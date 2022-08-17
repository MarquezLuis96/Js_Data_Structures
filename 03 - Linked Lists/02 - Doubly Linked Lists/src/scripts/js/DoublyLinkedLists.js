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
}

let myDoublyLinkedList = new DoublyLinkedLists(1);
myDoublyLinkedList.append(2);
myDoublyLinkedList.append(3);
myDoublyLinkedList.append(4);
myDoublyLinkedList.append(5);