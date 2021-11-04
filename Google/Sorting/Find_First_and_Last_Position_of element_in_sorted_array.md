# Find First and last position of element in sorted array
# Prompt
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value
If target is not found in the array, return [-1,-1]
You must write an algorithm with O(log n)
# Example
1. Example1
   - input: nums=[5,7,7,8,8,10] ; target =8
   - output: [3,4]
2. Example2:
   - inuput: nums=[5,7,7,8,8,10] ; target =6
   - output: [-1,-1];
3. Example 3
   - input: nums=[]; target=0
   - output: [-1,-1]
# Questions:
1. empty input array -> can be? -> return [-1,-1]
2. target num? undefined? no
3. how big is input?
4. is input array contain non-integer number? char? => no
5. what if just have 1 number match target? [index,index]
...
# Approach
  Approach : Use binary search
 1. initialize result =[-1,-1]
 2. initialize left,right index, midPoint
 3. compare target vs midNum at midPoint
    - target > midNum => left=midPoint+1
    - target < midNum => right= midPoint-1
    - taget === midNum => increasing left, righ while keep value of current num equal target
# Solution
```js
searchRange = function(nums, target) {
    let result=[-1,-1]
    let left = 0
    let right = nums.length-1
    while(left<=right){
       let midPoint= Math.floor((left+right)/2)
       let midNum=nums[midPoint]
        if(midNum < target){
            left=midPoint+1
        }else if(midNum > target){
            right=midPoint-1
        }else{
            let start=midPoint
            let end=midPoint
            while(nums[start]===target && start>=0){
                start-=1
            }
            result[0]= start+1
            while(nums[end]===target && end<nums.length){
                end+=1
            }
            result[1]= end-1
           return result
        }

    }

    return result

};
```

