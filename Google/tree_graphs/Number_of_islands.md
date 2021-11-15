# Number of Islands
# Prompt
Given an `m*n` 2D binary grid `grid` which represents a map of `1`s (land) and `0`s (water), return the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or verticallu. You may assume all four edges of the grid are all surrounded by water.

# Example 1:
- Input: grid=[

      1st["1","1","1","1","0"],
      2nd["1","1","0","1","0"],
      3rd["1","1","0","0","0"],
      4th["0","0","0","0","0"],
         ]
- Output: 1
- Explanation: the parts that form 1 island:
  + 1st[1->1->1->1]
       |         |
  + 2nd[1->1     1]
        |
  + 3rd[1->1]

# Example 2:
- Input: grid =[
    1st     ["1","1","0","0","0"],
     2nd    ["1","1","0","0","0"],
     3rd    ["0","0","1","0","0"],
      4th   ["0","0","0","1","1"],
         ]
- Output: 3
- Exalanation:
```js
   + 1st island: 1st  1->1
                      |
                 2nd  1->1
   + 2nd island:
            3rd: 1
   +3rd island: `1->1`
```

# Questions:
- Does it matter if type the elements in the grid is number or string? maybe not, cause we are gonna use graph, just compare 2 simple values: 1 & 0
- is any chance the grid is empty? NO (1<=m,n<= 30)
- how to form an island?
  + surrounded by water(0)
  + can be connecting with neighboor land (vertically or horizontally)

# Approach:

# Solution:
```js

  function countIslands(grid){
    let high = grid.length
    let width = hight !==undefined? grid[0].length :0
    let count =0

    for(let row=0; row< high; row++){
      for(let col=0; col<width; col++){
        if(grid[row][col])==='0' continue;
        count ++
        dfs(row,col);
      }
    }
    return count

    function dfs(row,col){
     if(row<0 || col<0 || row==high || col = width)return;
     if(grid[row][col]==='0') return
     grid[row][col]=='0'
     dsf(row-1,col);
     dfs(row+1,col)
     dfs(row,col-1)
     dfs(row,col+1)
   }
  }
```
