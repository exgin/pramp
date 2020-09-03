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

/* now lets implement an approach where we use dynamic programming */
function deletionDistanceV2(str1, str2, s1Len = str1.length, s2Len = str2.length) {}
