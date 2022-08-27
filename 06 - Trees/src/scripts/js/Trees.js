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
            console.log("Exception: Binary Tree UNDERFLOW.");
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
                    console.log("Error: Node not found.");
                    return undefined;
                }
            }
            else {
                //Goes to the rigth
                if(currentNode.rigth !== null) {
                    currentNode = currentNode.rigth;
                }
                else {
                    console.log("Error: Node not found.");
                    return undefined;
                }
            }
        }

        return currentNode;
    }

    searchParent(value) {
        if(this.root === null) {
            console.log("Exception: Binary Tree UNDERFLOW.");
            return undefined;
        }
        else if(value === this.root.value) {
            console.log("RootNode - No parent for this node");
            return this.root;
        }

        let currentNode = this.root;

        while(true) {
            if(value < currentNode.value) {
                if(currentNode.left.value == value) {
                    return currentNode;
                }
                currentNode = currentNode.left;
            }
            else {
                if(currentNode.rigth.value == value) {
                    return currentNode;
                }
                currentNode = currentNode.rigth;
            }
        }
    }

    searchPredecessor(subTreeRoot) {

        if(subTreeRoot.left === null) {
            console.log("Leaf Node - Predecessor doesn't exist for this node");
            return undefined;
        }

        let currentNode = subTreeRoot.left;
        while(currentNode.rigth !== null) {
            currentNode = currentNode.rigth;
        }

        return currentNode;
    }

    mostrarPredecesor(value) {
        return this.searchPredecessor(this.searchNode(value));
    }

    deleteNode(value) {
        let toDelete = this.searchNode(value);

        if (toDelete === undefined) {
            console.log("Can't delete the node becauese the node doesn't exist.");
            return undefined;
        }

        if(toDelete.left !== null || toDelete.rigth !== null) {
            let toDeletePredecessor = this.searchPredecessor(toDelete);

            let predecessorsParent = this.searchParent(toDeletePredecessor.value);

            if(predecessorsParent.left.value === toDeletePredecessor.value) {
                predecessorsParent.left = null;
            }
            else {
                predecessorsParent.rigth = null;
            }

            toDelete.value = toDeletePredecessor.value;
        }
        else {
            let toDeleteParent = this.searchParent(value);
            if(value < toDeleteParent.value) {
                toDeleteParent.left = null;
            }
            else {
                toDeleteParent.rigth = null;
            }
        }

        return this;
    }
}

const myBinaryTree = new BinarySearchTree();


//CASO 1
// myBinaryTree.insert(10);

// myBinaryTree.insert(4);
// myBinaryTree.insert(20);

// myBinaryTree.insert(2);
// myBinaryTree.insert(8);
// myBinaryTree.insert(17);
// myBinaryTree.insert(170);

//CASO 2
// myBinaryTree.insert(101);

// myBinaryTree.insert(33);
// myBinaryTree.insert(105);

// myBinaryTree.insert(9);
// myBinaryTree.insert(104);
// myBinaryTree.insert(144);

// myBinaryTree.insert(102);
// myBinaryTree.insert(130);
// myBinaryTree.insert(150);

// myBinaryTree.insert(170);

// myBinaryTree.insert(110);
// myBinaryTree.insert(125);

// myBinaryTree.insert(109);
// myBinaryTree.insert(115);

// myBinaryTree.insert(107);

// myBinaryTree.insert(10);
// myBinaryTree.insert(103);