# Validate a binary search tree
# Prompt
Given  the root of a binary tree, determine if it is a valid binary search tree(BST).
A valid BST is defined follows:
 - The left subtree of a node contains only nodes with keys less than the node's key
 - The right subtree of a node contains only nodes with key greater than the node's key.
 - Both the left and right subtrees must also be binary search trees.

# Example 1
- input: root =[2,1,3]
  ```js
       2
      / \
     1   3
  ```
- output: true

# Example 2
- input: root = [5,1,4,null,null,3,6]
  ```js
        5
       / \
      1   4
          /\
         3  6
  ```
- Output: false
- Explanation: The root node's value is 5 but its right child's value is 4.

# Questions:
 - how big is the input size
 - any contrains?
 - empty tree? return true
# Approach
 recursion? while loop?

# Solution use helper function
```js
   function TreeNode(val,left,right){
     this.val=(val===undefined? 0: val)
     this.left=(left===undefined? null: left)
     this.right=(right===undefined? null: right)
   }

function bst_helper(root,min,mx){
  // Hit the end of the path
  if(!root){
    return true
  }

  //current node is not satisfy the BST rules
  if((min!==null && root.val <= min) ||(max!==null && root.val>= max)){
    return false
  }
  // Continue scan the left and the right
  return bst_helper(root.left, min, root.val) && bst_helper(root.right, root.val, max)
}
function isValidBST(root){
  // If input is empty
     if(!root){
       return  true
     }
     return bst_helper(root, -Infinity, Infinity)
   }
```
# Another  solution
```js
 class BST{
   constructor(value){
     this.value=value
     this.left= null
     this.right=null
   }
 }

function validate_helper(tree, min, max){
  if(!tree){
    return true
  }
  if(tree.val<= tree.left)||(tree.val>= tree.right)){
    return false
  }
  let leftValidate= validate_helper(tree.left,min, tree.val)
  let rightValidate = validate_helper(tree.right, tree.val, max)
  return leftValidate && rightValidate
}
 function isValidBST(tree){
   return validate_helper(tree, -Infinity, Infinity)
 }

```
