# Count of Smaller Numbers After Self
# Prompt
You are given an integer array nums and you have to return a new `counts` array. The `counts` array has property where `counts[i]` is the number of smaller elements to the right of `nums[i]`
# Example
 1. Example 1:
  - Input: nums=[5,2,6,1]
  - Output: counts=[2,1,1,0]
  - Explanation:
   + to the right of 5 there are 2 smaller elements (2 and 1)
   + to the right of 2 there is only smaller element: 1
   + to the right of 6 there is 1 smaller element (1)
   + to the right of 1 there is 0 smaller element

2. Example 2 :
 - Input: nums=[-1]
 - Output: [0]

3. Example 3:
 - input: nums=[-1,-1]
 - Output: [0,0]

# Constraints
 1<= nums.length <= 10^5
 -104 <= nums[i] <= 104
# Questions:
1. empty input? No
2. no smaller elements? -> count[i]=0
3. all elements are equal? could be ...

# Approach
1. Approach 1 - Brute Force - Time complexity On^2
- loop throught the input array
- initialize count=0 for each round, if the element in the greater index smaller than the current value, increase count
- reach the end of the loop:
   + push count in output array
   + reset count to zero

### Solution1 :
```js
var countSmaller = function(nums) {
    let counts=[]
    for (let i=0; i<nums.length; i++){
        let currentE= nums[i]
        let count=0
        for(let k=i+1; k<nums.length; k++){
            if(currentE> nums[k]){
                count++
            }
        }
        counts.push(count)
        count=0
    }
    return counts
};
```
