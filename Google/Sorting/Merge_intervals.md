# Merge Intervals
# Prompt
Given an array of intervals where intervals[i]=[start(i), end(i)], merge all overlapping intervals and return an array of non-overlapping intervals that cover all the intervals in the input

# Example
1. Example 1
   - input: intervals=[[1,3],[2,6],[8,10],[15,18]]
   - output: [[1,6],[8,10],[15,18]]
   - Explanation: [1,3] and [2,6] overlaps => merge them into [1,6]
2. Example 2
   - input: intervals =[[1,4],[4,5]]
   - output: [1,5]
   - Explanation: [1,4] and [4,5] overlap => merge into [1,5]

# Questions:
- posibility that there are no overlapping set ? yes
- how big is input size?
- how many element in each children array? => 2: start - end
- is that posible start > end? => no
- is input sorted? not neccessary
- is input empty? no
- is posiple that multiple children array element overlap? could be
- can current end > next end? could be
- is output sorted? should be

# Summary
- input: 2 dimension array,each array element has 2 element : start-end
- output: 2 dimension array non-overlapping element

# Approach:
- sort the input -> small-> large
- initialize result=[]
- initialize current array element at input[0]
- initialize next array lelement
- iterate input
- compare: current[end] vs next[start]?
   + if current[end]< next[start] => currentArr = nextArr
   + if current[end]>=next[start] => current[end]= next[end]

# Solution
```js
var merge = function(intervals) {
    intervals.sort((a,b)=>(a[0]-b[0]));
    let result=[];
    let currentArr=intervals[0];
    result.push(currentArr)
    for(let i=1; i< intervals.length; i++){
        let nextArr=intervals[i]
        let [current_start, current_end]= currentArr
        let [next_start, next_end] = nextArr
        if(current_end >= next_start){
            currentArr[1]=Math.max(current_end,next_end)

        }else{
            currentArr=nextArr
            result.push(currentArr)
        }
    }
    return result
};
```
