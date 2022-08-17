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

    //Inserts a new node after a given index
    insertAfterNode(key, index) {
        if (index > this.length) {
            this.append(key);
            return this;
        }

        const newNode = new Node(key);
        const index_node = this.getNode(index);

        newNode.prev = index_node;
        newNode.next = index_node.next;

        index_node.next = newNode;
        index_node.next.prev = newNode;

        this.length++;

        return this;
    }

    //Deletes a node given a key
    deleteKey(key_to_delete) {
        let index_to_delete = this.getKeyIndex(key_to_delete);
        let node_to_delete = this.getNode(index_to_delete);

        node_to_delete.next.prev = node_to_delete.prev;
        node_to_delete.prev.next = node_to_delete.next;

        this.length--;

        return this;
    }
}

let myDoublyLinkedList = new DoublyLinkedLists(1);
myDoublyLinkedList.append(2);
myDoublyLinkedList.append(3);
myDoublyLinkedList.append(4);
myDoublyLinkedList.append(5);