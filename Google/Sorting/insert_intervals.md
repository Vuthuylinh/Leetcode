# Insert intervals
# Prompt
You ar given an array of non-overlapping intervals `intervals` where i
`intervals[i]=[start(i), end(i)]` represent the start and end of the `ith` interval and `intervals` is sorted in ascending order by `start(i)`. You are also given an interval `newInterval` = `[start,end]` that represents the start and end of another interval.
Insert `newInterval` into `intervals` such that `intervals` is still sorted in ascending order by `start(i)` and `intervals` still does not have any overlapping intervals (merge overlapping intervals if necessary).

Return `intervals` after insertion.

# Example
## Example 1
 - input: intervals =[[1,3],[6,9]]; newInterval=[2,5]
 - output: intervals=[[1,5],[6,9]]
## Example 2
- input: intervals=[[1,2],[3,5],[6,7],[8,10],[12,16]]; newInterval=[4,8]
- output: [[1,2],[3,10],[12,16]]
- Explanation: [4,8] ovellaps with [3,5],[6,7],[8,10]
## Example 3:
- input: intervals=[], newInterval=[3,5]
- output: [[3,5]]

## Example 4:
- input: intervals=[[1,5]], newInterval=[2,3]
- output: [[1,5]]

## Example 5:
- Input: intervals=[[1,5]]; newInterval=[2,7]
- output: [[1,7]]

# Questions:
- input: intervals is empty? could be
- input newInterval is empty? No
- how big is the intervals input size?
- time Complexity expected?
- modified in place? or can create another array for result?
# Approach use mergeInterval helper function
1. push newInterval into intervals
2. merge intervals

# Solution
```js
  function mergeInterval(intervals){
    intervals.sort((a,b)=>(a[0]-b[0]));
    let mergedIntervals=[]
    let currentInterval=intervals[0]
    mergedIntervals.push(currentInterval);
    for(let i=1; i<intervals.length; i++){
        let next_interval=intervals[i]
        let [current_start, current_end]= currentInterval
        let [next_start, next_end]= next_interval
        if(current_end>=next_start){
          currentInterval[1] = Math.max(current_end, next_end)

        }else{
            currentInterval = next_interval
            mergedIntervals.push(currentInterval)
        }
    }
    return mergedIntervals
}
var insert = function(intervals, newInterval) {
    intervals.push(newInterval);
let result= mergeInterval(intervals)

return result
};

let intervals = [[1,3],[6,9]]
let newInterval = [2,5]

let result= insert(intervals, newInterval)
console.log(result)
```




