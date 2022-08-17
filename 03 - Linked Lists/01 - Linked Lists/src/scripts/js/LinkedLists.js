//Graphical representation of a simply linked list
// 1 -----> 2 -----> 3 -----> 4 -----> null
/*let singlyLinkedList = {
    head: 1,
    next: {
        value:2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
}*/


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class MySinglyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;

        this.length = 1;
    }


    append(value) {
        const newNode = new Node(value);

        this.tail.next = newNode;

        this.tail = newNode;

        this.length++;
    }


    prepend(value) {
        const newNode = new Node(value);

        newNode.next = this.head;

        this.head = newNode;

        this.length++;
    }


    getTheIndex(index) {
        let counter = 0;
        let currentNode = this.head;

        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }

        return currentNode;
    }


    insert(index, value) {
        if(index >= this.length) {
            return this.append(value);
        }

        const newNode = new Node(value);
        const firstPointer = this.getTheIndex(index - 1);
        const holdingPointer = firstPointer.next;
        firstPointer.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
        return this;
    }

    deleteNode(index) {
        if (index > this.length) {
            console.log("Index Out of Bounds: Overflow Exception");
            return undefined;
        }
        else {
            const to_delete = this.getTheIndex(index - 1);
            const to_modify = this.getTheIndex(index - 2);
            to_modify.next = to_delete.next;
            
            delete to_delete.next;
            delete to_delete.value;

            this.length--;

            console.log("Node succesfully deleted");
            return this;
        }
    }

    searchKeyIndex(key_to_search) {
        let counter = 0;
        let currentNode = this.head;

        while (counter < this.length) {
            if (currentNode.value == key_to_search) {
                return counter;
            }

            currentNode = currentNode.next;
            counter++;
        }

        return null;
    }

    deleteKey(key_to_delete) {
        var index_to_delete = this.searchKeyIndex(key_to_delete);

        if (index_to_delete == null) {
            console.log("Exception: The key doesn't exist...");
            return undefined;
        }
        else {

            var node_to_delete = this.getTheIndex(index_to_delete);
            var previous_to_delete = this.getTheIndex(index_to_delete - 1);
    
            previous_to_delete.next = node_to_delete.next;
    
            this.length--;

            return this;
        }
    }
}

let mySinglyLinkedList = new MySinglyLinkedList(1);