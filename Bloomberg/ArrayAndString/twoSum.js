/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

- iterate to create set that holds elementValue -index
- iterate to see if remainder = target- elementValue in set? return [set[remainder], indexOf current element]

*/


//Solution1: You can return the answer in any order.(88ms)
function twoSum(nums, target){
let set ={}

for(let i=0; i<nums.length; i++){
  set[nums[i]]=i
}

for(let i=0; i<nums.length; i++){
  let remainder = target -nums[i]
  if(set[remainder] && set[remainder]!==i){
    return [set[remainder],i]
  }
}
return []
}

// Solution2: return the answer in any order.(68ms)
function twoSum1(nums, target){
let set ={}
  for(let i=0; i<nums.length; i++){
      let remainder = target-nums[i]
      if(remainder in set && set[remainder] !==i){
          return [i,set[remainder]]

      }else{
          set[nums[i]]= i
      }

  }
    return []
}

//Solution3: return [i,j] where i>j  (72ms)


function twoSumOrdered(nums, target){
  let set ={}
    for(let i=0; i<nums.length; i++){
        let remainder = target-nums[i]
        if(remainder in set && set[remainder] !==i){
            return i>set[remainder]
            ? [i,set[remainder]]
            : [set[remainder],i]

        }else{
            set[nums[i]]= i
        }

    }
      return []
  }
