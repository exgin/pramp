/*
Link: https://www.pramp.com/challenge/N5LYMbYzyOtbpovQoY7X
Constraints: Cannot cross diagonally, MUST maintain i >= j

General Rules: E = right | N = up


Approaches in mind: DP
**Cannot pass i >= j**

j 
  5
  4
  3
  2 
  1 
  0 1 2 3 4 5
              i  

              
              i>=j

Can't move digonally

Input: 4
Expected Output: valid paths from (0,0) to (h-1, n-1)

Approach: memoization & DP
*/

/* 0,0 -> 0,1 -> 1,1*/
/* (0,0) -> (0,1) -> (1,1) -> (1,2) -> (2,2)*/
/* (0,0) -> (0,1) -> (0,2) -> (1,2) -> (2,2)*/

function numOfPaths(n) {
  // base case
  if (n === 1) return 1;

  // create our 2d array, to store our unquie paths
  const memo = [];
  for (let i = 0; i < n; i++) {
    memo.push([]);
    memo[i].push(new Array(n - 1));

    for (let j = 0; j < n; j++) {
      // set every cell to -1 to indicate that its not calculated yet
      memo[i][j] = -1;
    }
  }

  console.table(memo);
  return numOfPathsToSquare(n - 1, n - 1, memo);
}

function numOfPathsToSquare(i, j, memo) {
  // return the number of paths from (0,0) to our (i,j)
  if (i < 0 || j < 0) {
    return 0;
  } else if (i < j) {
    memo[i][j] = 0;
  } else if (memo[i][j] !== -1) {
    // it has been computed, return it
    return memo[i][j];
  } else if (i === 0 && j === 0) {
    return (memo[i][j] = 1);
  } else {
    // else keep moving through the dp table
    memo[i][j] = numOfPathsToSquare(i, j - 1, memo) + numOfPathsToSquare(i - 1, j, memo);
  }
  return memo[i][j];
}

console.log(numOfPaths(3));
