/*
the minimum number of characters needed to deleted in the first string
to get the same string as str2

Examples:
str1 = dog | str2 = frog    output = 3, we remove 
str1 = some | str2 = some   output = 0, we don't replace anything since its the same work
str1 = some | str2 = thing  output = 9, we would have to replace the entire string since no letters are the same

this approach is O(3^n), worst case is when none of the characters in the string match
*/
function deletionDistance(str1, str2, s1Len = str1.length, s2Len = str2.length) {
  /* process each character starting from the left or right */
  // if either string is empty, we return the string
  /* Explanation: due to how our function is setup, we keep subtracting the length of the array & compare the values, once our base case hits,
  .. the 0 length, we place that value onto the call stack. then we keep going & finally return the minimum value off the stack */
  if (s1Len === 0) return s2Len;
  if (s2Len === 0) return s1Len;

  // if the last two characters are the same, ignore them & count for the remaining of the strings
  if (str1[s1Len - 1] === str2[s2Len - 1]) return deletionDistance(str1, str2, s1Len - 1, s2Len - 1);

  // last case, if neither, we consider all options of insert, deleting & replace
  return 1 + Math.min(deletionDistance(str1, str2, s1Len, s2Len - 1), deletionDistance(str1, str2, s1Len - 1, s2Len));
}
// add deletionDistance(str1, str2, s1Len - 1, s2Len - 1) to the last return on line 21 to compare str2's minimum to the first
deletionDistance('some', 'thing'); // 9 -> stepping down the 2nd string until we find a match, it ends up being both strings combined since nothing matches | then we keep returning off the call stack
deletionDistance('dog', 'frog'); // 3
deletionDistance('', ''); // 0

/* now lets implement an approach where we use dynamic programming 
creating a temporary array to avoid subproblems being overlapped, by storing in a temporary arroy */
function deletionDistanceV2(str1, str2, str1Len = str1.length, str2Len = str2.length) {
  /* we build up from subproblems to find our final value */
  const memo = [];

  for (let i = 0; i <= str1Len; i++) {
    /* create a matrix based off the 1st arrays length */
    memo.push([]);
    memo[i].push(new Array(str2Len));
    console.table(memo);
    for (let j = 0; j <= str2Len; j++) {
      /* base case: if a string is another, fill up col/row with the oppostie string's length */
      if (i === 0) {
        memo[i][j] = j;
      } else if (j === 0) {
        memo[i][j] = i;
      } else if (str1[i - 1] === str2[j - 1]) {
        /* if both characters are equal, we do nothing, 
        basically we thake the previous element's operation cost */
        memo[i][j] = memo[i - 1][j - 1];
      } else {
        /* if not equal, take the minmum */
        memo[i][j] = 1 + Math.min(memo[i - 1][j], memo[i][j - 1]);
      }
    }
  }

  /* return the bottom right value, remember we're only doing deletion */
  return memo[str1Len][str2Len];
}
/* Matrix (x,y)                    Y       X    */
console.log(deletionDistanceV2('billy', 'jine'));

/* Using all 4 avaialbe operations: do nothing, edit, delete, replace */
function editDistance(str1, str2, str1Len = str1.length, str2Len = str2.length) {
  const memo = [];

  for (let i = 0; i <= str1Len; i++) {
    memo.push([]);
    memo[i].push(new Array(str2Len));
    for (let j = 0; j <= str2Len; j++) {
      if (i === 0) {
        memo[i][j] = j;
      } else if (j === 0) {
        memo[i][j] = i;
      } else if (str1[i - 1] === str2[j - 1]) {
        memo[i][j] = memo[i - 1][j - 1];
      } else {
        /* if not equal, take the minmum of all operations, Insert, Delete, Replace*/
        memo[i][j] = 1 + Math.min(memo[i - 1][j], memo[i][j - 1], memo[i - 1][j - 1]);
      }
    }
  }
  /* return the bottom right value */
  return memo[str1Len][str2Len];
}

console.log(editDistance('billy', 'jine'));
