/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

Approach:
 - check lenght of 2 string? not equal => return fasle
 -equal:
    -> turn 2 string into array -> sort
    -> compare element by element
          if there is any element in the same index of str1 !== str2 => false

          return true

*/

//solution1

const isAnagram = function(s,t){
  if(s.length !== t.length){
    return false
  }
 let arr1 = s.split("").sort();
 let arr2 = t.split("").sort()

 for(let i=0; i<arr1.length; i++){
   if(arr1[i]!==arr2[i]){
     return false
   }
 }
return true
}

//solution2: hash table
