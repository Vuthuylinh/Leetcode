/*
Three Sum
Given an array (nums) of n integers, are three elements a,b,c in nums such that a+b+c =0? Find all unique triplets in the array which gives the sum of zero

Notice: the solution set mush not contain duplicate triplets

Example:
  Input: nums = [-1,0,1,2,-1,-4] , target =0
  Output: [[-1,-1,2],[-1,0,1]]

sort arr accendent
current element =arr[i], start from arr[0] to arr.length-1
leftIndex =i+1  start from arr[1]
rightIndex = arr.length-1

[-1,0,1,2,-1,-4]
            0  1  2  3  4  5
 => sort  [-4,-1,-1, 0, 1, 2]
               -
                  ^        ^
i=0
while left<right
sum = element +arr[left] + arr[right]
    = -4 -1+2 = -3 < target=0
                    -> left++
    = -4 -1+2 = -3 < target=0
                    ->left++
    = -4 +0 +2 = -2 <target =0
                    ->left++
    = -4+1+2   = -1 <0
i=1


Approach1: use 3 pointers for 3 numbers - Time O(n^2)| O(n) space
 - create an empty array to keep results =[]
 - sort array
 - 1st pointer for the outer for loop
 - 2nd and 3rd pointers use nested while loops(left,right)
        left: start from i+1
        right: start from array.length-1 (last index of the array)
 - while left<right
    sum = arr[pointer1]+ arr[left] + arr[right]  (set of three)
    compare sum of those three with targetSum
    sum === target => results.push(set of three above) & left++ ; right --
    sum < target => left++
    sum > target => right --
 - after the outer for loop finish, return results array.
Example:
index:   0   1   2  3   4   5
input   [-1, 0,  1, 2, -1, -4], target =0

sorted: [-4, -1, -1, 0,  1,  2]
          ^ left            right     -4 +(-1)+ 2 = -3 < 0 => left++
              ^  left       right     -1+(-1)+ 2 =0 => result.push(pinter1, left, right)

*/

function threeSum(arr,targetSum){
 let results =[]
 arr.sort((a,b)=> a-b)
 for(let i=0; i<arr.length; i++){
   let currentElement= arr[i]
   if(currentElement>targetSum) break
	if(i>0 && arr[i]===arr[i-1]) continue
   let left =i+1;
   let right =arr.length-1
   while(left<right){
     let sum = currentElement+arr[left]+arr[right]
     if(sum === targetSum){
       results.push(currentElement, arr[left], arr[right])
       while(left<right &&arr[left]===arr[left+1]){
        left+=1
      }
      while(left<right &&arr[right]===arr[right-1]){
          right-=1
      }
       left++
       right--
     }else if(sum<targetSum){
       left++
     }else{
       right--
     }
   }
 }
 return results
}


//Approach 2: Memoization
