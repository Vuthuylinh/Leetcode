# Depth First Search
# Prompt
You are gien a Node class that has a name and an array of optional children nodes. When put together, nodes form an acyclic tree-like structure
Implement the depth-first-search method on the Node class, which takes in an empty array. Traveses the tree using the Depth First Search apprach (specifically navigating the tree from left to right), stores all of the node's names in the input array, and return it.

# Conceptual
for every node visited, push in output array
start from the root,
check if the root has left child? call dfs recursively on that left child
check if the root has righ child? call dfs recursively on that right child

# Impliment
```js
class Node{
  constructor(name){
    this.name=name;
    this.children =[]
  }
  addChild(name){
    this.children.push( new Node(name))
    return this
  }

  depthFirstSearch(array){
    array.push(this.name)
    for(let child of this.children){
      child.depthFirstSearch(array)
    }
    return array
  }
}
```
