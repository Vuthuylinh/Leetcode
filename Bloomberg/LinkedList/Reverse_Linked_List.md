# Reverse Linked List
# Prompt
 Given  the head of a singly linked list, reverse the list and return the reversed linked list.

# Example:
1. Example 1:
   - input: head =[1,2,3,4,5]
   - output: [5,4,3,2,1]
2. Example 2:
   - input: head = [1,2]
   - output: [2,1]
3. Example 3:
   - input: head =[]
   - output: []
# Questions
   1. how big is the input?
   2. reverse inplace or can make another linked list for return? (linked list is mutable or not?)

# Approach1: Using a stack - mutate/ not mutate input
- iterate the linked list to push all node in the stack
- create a dummyHead for new LinkedList for return
- iterate the stack,
- create new node with each element pop out of the stack
add the node to head, move the head along
# Solution:
 ```js
 function ListNode(val,next){
   this.val=(val===undefined?0: val)
   this.next= (next==undefined? null: next)
 }
//Mutate the input Linked list
 funtion reverseLinkedList(head){
   let stack=[]
   while(head){
     stack.push(head)
     head= head.next
   }

   let dummyHead= new ListNode(0);
       head = dummyHead
   while(stack.length>0){
     let currentNode = stack.pop()
      head.next = new ListNode(currentNode.val);
      head= head.next
   }
   return dummyHead.next;
 }

// Create a new Linked list for return - not mutate the input
 funtion reverseLinkedList(head){
   let stack=[]
   while(head){
     stack.push(head)
     head= head.next
   }

   let dummyHead= new ListNode(0);
   let  newhead = dummyHead
   while(stack.length>0){
     let currentNode = stack.pop()
      newhead.next = new ListNode(currentNode.val);
      newhead= newhead.next
   }
   return dummyHead.next;
 }
 ```

# Approach 2:
- iterate the input linked list to revese along the way
- manipulate 3 nodes: currentNode, prevNode, and next Node as the same time in each step

## Solution2:
```js
 funtion reverseLinkedList(){
   let prevNode= null
   let currentNode=head
   while(currentNode!==null){
     let nextNode = currentNode.next
       currentNode.next= prevNode
       prevNode = currentNode
       currentNode= nextNode
   }
   return prevNode
 }
```


