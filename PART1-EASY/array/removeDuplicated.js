/*
- Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.
- resource: https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/727/

=> input: sorted array of numbers
=> output: an integer (length of new array - removed duplicated nums)
NOTE: modifying the input array in-place
*/

const removeDuplicates = function (nums) {

  if (nums.lenght === 0) {
    return 0
  }
 let pointer1 =0;
 for(let pointer2 =0; pointer2< nums.length; pointer2++){
   if(nums[pointer1]!== nums[pointer2]){
     pointer1++
     nums[pointer1] = nums[pointer2]
   }
 }

return pointer1+1
}

removeDuplicates()




