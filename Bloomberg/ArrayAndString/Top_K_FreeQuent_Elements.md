# Top K Frequent Element
# Prompt
Given an integer array nums and an integer k, return the k most frequent elements. You may return the result in any order.
# Example
1. Example1
- input: array =[1,1,1,1,1,2,2,2,2,3,4,4,4,4,4,4] ; k=3
- output: [1,4,2]
2. Example2:
- input: array =[1,1,1,1,1,2,2,2,2,3,4,4,4,4,4,4] ; k=2
- output: [1,4]
3. Example3:
- input array=[1,2,2,3] ; k =5
- output: [1,2,3]

# Summary:
- input: array of integer and an integer (k)
- output array with length=k, contain top frequent nums

# Questions:
- input array empty? no
- k=0? no => k>0
- k >array.length? could be, but not likely will happen
- output contain unique nums? yes
- output is sorted? no need, can be in any order

# Approach 1
1. Loop through input array (Time: O(n))
2. Use hash table or object to keep all unique nums while loop through input array (Space: O(n))
3. Create an two dimension array (obj-arr) contain key-value of object as a children array
4. sort obj-arr with the values in decending order
5. initialize result arr
6. loop throught obj-arr -sorted => push k first values

# Approach 2:

1. Loop through input array
2. Use hash table/ object to keep all unique nums
3. Loop through object `k` time to find the most frequent nums

# Solution 2:
```js
 function find_k_top_frequent(arr,k){
   let obj = {}
   // get all unique nums in an object
   for(let num of arr){
     if(!obj.num){
       obj[num]=1
     }else{
       obj[num]+=1
     }
   }
    // check k>= number of key in object? => return object_keys
      let key_nums= Object.keys(obj)
      if(k>=key_muns.length){
        return key_nums
      }
   //repeat looping object k times (O(k)*O(m)): m : number of key in object
   let result=[]
   let count=1
   while(count<=k){
    let max_key= null
    let maxFreq = -Infinity
    //loop through object
    for(let key in obj){
      if(obj[key]> maxFreq){
        maxFreq=obj[key]
        max_key=key //keep updating max_key until finish looping obj
      }
    }
    result.push(max_key)
    //obj[max_key]= Infinity
    delete obj[max_key]
    count+=1
    }
  return result
 }
```
