/*
Longest substring without repeating Characters

Given a string s, find the length of the longest substring wthout repeating characters

Example:
Input: s = "abcabcbb"
-> the longest substring w/o duplicated characters are:
 abc ; bca ; cab  with equal length =3
 => return 3

Input: string

output: integer
            the longest length of subtring w/o duplicated char

Q: input = empty string -> return 0
   substring # subsequence

Approach:
- variable maxLen : keep track of longest subStr
- initialize an array to keep track of distinct elements
- iterate the input string
    if current element is not exist in the array
        -> arr.push(str[i])
    if current element is in the array
              -> check length of the array
              -> compare arr.length > maxLen? => maxLen=arr.length
              -> cut the a part of array from 0 to the first index Of current element in the arr
                        -> indx = arr.indexOf(str[i])
                        -> arr.slice(indx)
                        ->arr.push(str[i]) -> start a new loop
    after finished iterate the str
            compare maxLen < arr.length? maxLen=arr.length

Input: s = "abcababb"
            -----
                ^
maxLen=0
arr=[a,b,c] maxLen=3
remove part from 0 to the first indexof current element
arr=[c,a]

*/
function lengthOfLongestSubString(str){
  let maxLen=0
  let arr=[]

  for(let char of str){
    if(!arr.includes(char)){
      arr.push(char)
    }else{
      if(maxLen<arr.length){
        maxLen=arr.length
      }
      arr.push(char)
      let firstPositionOfChar = arr.indexOf(char)
      arr = arr.slice(firstPositionOfChar+1)
    }
  }
  maxLen = maxLen<arr.length? arr.length : maxLen
  return maxLen
}

