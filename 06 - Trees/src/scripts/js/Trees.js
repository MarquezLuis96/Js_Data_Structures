/*
            Binary Tree
                10
        4               20
    2       8       17      170

*/

class Node {
    constructor(value) {
        this.left = null;
        this.rigth = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        }
        else {
            let currentNode = this.root;
            while(true) {
                if(value < currentNode.value) {
                    if(!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                }
                else {
                    if(!currentNode.rigth) {
                        currentNode.rigth = newNode;
                        return this;
                    }
                    currentNode = currentNode.rigth;
                }
            }
        }
    }

    searchNode(value) {
        if(this.root === null) {
            console.log("Exception: Binary Tree UNDERFLOW");
            return undefined;
        }
        
        let currentNode = this.root;

        while(true) {
            if(currentNode.value === value) {
                return currentNode;
            }

            if(value < currentNode.value) {
                //Goes to the left
                if(currentNode.left !== null) {
                    currentNode = currentNode.left;
                }
                else {
                    console.log("Node not found");
                    return undefined;
                }
            }
            else {
                //Goes to the rigth
                if(currentNode.rigth !== null) {
                    currentNode = currentNode.rigth;
                }
                else {
                    console.log("Node not found");
                    return undefined;
                }
            }
        }

        return currentNode;
    }
}

const myBinaryTree = new BinarySearchTree();

myBinaryTree.insert(10);

myBinaryTree.insert(4);
myBinaryTree.insert(20);

myBinaryTree.insert(2);
myBinaryTree.insert(8);
myBinaryTree.insert(17);
myBinaryTree.insert(170);