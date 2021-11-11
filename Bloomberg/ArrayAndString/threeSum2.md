# Prompt
Given an integers array nums, returns all the triplets [nums[i]+ nums[j]+ nums[k]] such that i!=j!=k and nums[i]+ nums[j]+ nums[k] =0
# Example
1. Example 1:
  - Input: nums = [-1,0,1,2,-1,-4]
  - Output: [[-1,-1,2],[-1,0,1]]
2. Example 2:
  -  Input: nums = []
  - Output: []
3. Example 3:
   - Input =[0]
   - Output=[]

# Questions:
- input empty => return []
- input 1 or 2 elements => return []
- return all set that qualify ? yes, could have more than 1 set

# Approach 1: Brute force nested loop : 3 for loop

# Approach2: using 2 pointers
- sort input accending order
- initialize result array =[]
- current element index 0
- left pointer  at index 1
- right pointer at the last index
- calulate sum of curren+ left+ right
- move left or right pointer accodingly
  check result => qaulify => push in result

# Solution
```js
 function threeSum(nums){
   nums.sort((a,b)=>(a-b))
   let result=[]
   let currentIndex=0
   let left=1
   let right= nums.length-1

   while(currentIndex<nums.length){
     let currentVal= nums[currentIndex]
     let leftVal= nums[left]
     let rightVal=nums[right]
     let sum= currentVal+leftVal+rightVal
     if(sum<0){
       left++
     }else if(sum>0){
       right--
     }else{
       result.push([currentVal,leftVal, rightVal])
       left++
       right--
     }
     currentIndex++
   }
   return result
 }
```

