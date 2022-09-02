/*
    2 - 0
   / \
  1 - 3
*/

//EXAMPLES OF GRAPHS REPRESENTATIONS
//EDGE LIST
const EdgeListGraph = [
    [0,2],
    [2,3],
    [2,1],
    [1,3]
];

//ADJACENT LIST
//INDEX:                    0    1      2       3
const AdjacentListGraph = [[2],[2,3],[0,1,3], [1,2]];

//HASH TABLE
const HashTableGraph = {
    0:[2],
    1:[2,3],
    2:[0,1,3],
    3:[1,2]
};

//AJACENT MATRIX
const AdjacentMatrixGraph = [
    [0,0,1,0],
    [0,0,1,1],
    [1,1,0,1],
    [0,1,1,0]
];

const ObjectAdjacentMatrixGraph = {
    0:[0,0,1,0],
    1:[0,0,1,1],
    2:[1,1,0,1],
    3:[0,1,1,0]
};