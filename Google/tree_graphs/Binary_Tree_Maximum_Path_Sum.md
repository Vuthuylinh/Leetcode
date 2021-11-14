# Binary Tree Maximum Path Sum
# Prompt
A path in a binary tree is a sequence of nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.
The `path sum` of a path is the sum of the node's values in the path.
Given the `root` of a binary tree, return the maximum `path sum` of any non-empty path.

# Example
1. Example1
   - Input: `root =[1,2,3]`
   - Output: 6
   - Explanation: The optimal path is 2 ->1 ->3 with a path sum of `2 + 1 + 3 = 6`
2. Example 2:
   - Input: root =[-10,9,20,null,null,null,15,7]
   - Output: 42
   - Explanation: The optimal path is 15 ->20 -> 7 with a path sum 15+20+7 = 42

# Questions:
 1. is the tree is binary search tree? NO - just a regular binary tree
 2. can input be empty? yes - if root = null
 3. How big is the path? how many elements in a path?
#
