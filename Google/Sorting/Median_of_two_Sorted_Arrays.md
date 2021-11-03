# Median of Two Sorted Array

### Prompt
Given two sorted arrays `nums1` and `nums2` of size `m` and  `n` respectively, return the median of the two sorted arrays.
The overall run time complexity should be O(log(m+n))

### Example 1:
- input:
   nums1=[1,3]
   nums2=[2]
- Output: 2.00000
- Explanation: merge array = [1,2,3], median is 2

### Example 2:
- input:
  nums1=[1,2]
  nums2=[3,4]
- ouput: 2.50000
- Explanation: merged array =[1,2,3,4] ; median = (2+3)/2=2.5
### Example 3
- input:
   nums1=[0,0]
   nums2=[0,0]
- ouput= 0.00000
### Example 4
 - input
   nums1=[]
   nums2=[1]
- output=1.00000
#### Example 5
 - input
  nums1=[2]
  nums2=[]
- output : 2.00000

### Questions:
 1. input arrays are empty => ?  m+n >=1 => not all empty
 2. how big are the input size?
 3. input are sorted? yes
 4. median is not average of all number in the merge array
 5. constraints: run time is O(m+n)
### Approach
#### Approach 1: Doesn't work b/c we are not looking for average
 - initialize a totalsum=0
 - loop nums1, nums2 to calculate toatalsum
 - median = totalsum/(m+n)

#### Approach 2:
- concat 2 arrays
- sort the merged array
- calculate midpoint = (m+n)/2
   + if midpoint %2 !== 0 => median = array[midpoint]
   + if midpoint%2 ===0 => median = (array[midpoint-1]+ array[midpoint])/2

```js
function findMedianSortedArray(nums1, nums2){
let total = 0
    let newArr= nums1.concat(nums2);
    let length = newArr.length
    let midpoint= Math.floor(length/2)
    newArr.sort((a,b)=>(a-b))
    if(length %2!==0){
        return newArr[midpoint]
    }else{
        return (newArr[midpoint]+newArr[midpoint-1])/2
    }
}
```
#### Approach 3: Manualy merge

```js
 function findMedianSortedArray(nums1, nums2){
    let newArr=[]
   let indxOne=0
   let indxTwo=0
   //merge
  while (newArr.length< len){
    if(nums1[indxOne]<nums2[indxTwo] || indxTwo>=nums2.length){
      newArr.push(nums1[indxOne])
      indxOne++
    }else if(nums1[indxOne]>= nums2[indxTwo] || indxOne>=nums1.length){
      newArr.push(nums2[indxTwo])
        indxTwo++
    }
  }
  //calculate median
  return (len%2
      ? newArr[Math.floor(len/2)]
      : (newArr[len/2 -1] + newArr[len/2])/2
  )
 }
```
