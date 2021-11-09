# Add Two Numbers
# Prompt
 You are given two non-empty linked lists representing two non-negative integers. the digists are sorted in reverse order, and each of their nodes contains a single digit.Add the two numbers and return the sum as a linked list
 You may assume the two numbers do not contain any leading zero, except the number 0 itself.

# Example
1. Example1
- input:
    + 1st linked list: 2->4->3
    + 2nd linked list: 5->6->4
- output: linked list: 7->0->8
- Explanation: 324 + 465 = 807

2. Example 2:
   - input:
      + l1: [0]
      + l2: [0]
   - ouput: [0]
   - explanation: 0+0 =0
3. Example 3:
   - input:
      + l1: [9,9,9,9,9,9,9]
      + l2: [9,9,9,9]
   - output:[8,9,9,9,0,0,1]

# Questions:
- any input linked list is empty? no
- is that possible that all numbers in a linked list are equal? could be
- the linked list is presenting a number in reverse order:
  linked list: 2->4->3 => number: 342
- result is sum in reverse order as well
- how big are input linked lists?
- are input linked list single linked list? (value and next pointer)
# Approach
1. Logic:
   - input are single linked list
   - class Linked list
    ```js
      class LinkedList{
        constructor(head=null){
          this.head=head
        }
      }
    ```
    - Class node in Linked list
    ```js
      class ListNode{
        constructor(data){
          this.data=data
          this.next=null
        }
      }
    ```

2. Steps
   - initialize a node with ListNode class
   - carryOver=0
   - node1=l1
   - node2=l2
   - calculate sum, carryOver, newValue while l1!=null || l2 !-=null || carryOver!==null
# Solution

```js
  function addTwoNumbers(l1,l1){
    let node1= l1
    let node2= l2
    let sumList= new ListNode(0)
    let currentNode = sumList
    let carryOver=0
    while(node1!==null || node2!==null || carryOver !==0){
      let value1= node1 !==null? node1.val :0
      let value2= node2 !==null? node2.val :0
      let sum =value1+value2+carryOver
      let newValue= sum%10
      let newNode = new ListNode(newValue)
       currentNode.next=newNode
       currentNode = currentNode.next
       carryOver = Math.floor(sum/10)
       node1= node1 !==null? node1.next: null
       node2= node2 !==null? node2.next: null
    }
    return sumList.next
  }
```
