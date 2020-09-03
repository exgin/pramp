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

  // if either string is empty, we can only return the other string | thus we're inserting
  if (s1Len === 0) return s2Len;
  if (s2Len === 0) return s1Len;

  // if the last two characters are the same, ignore them & count for the remaining of the strings
  if (str1[s1Len - 1] === str2[s2Len - 1]) return deletionDistance(str1, str2, s1Len - 1, s2Len - 1);

  // last case, if neither, we consider all options of insert, deleting & replace
  return 1 + Math.min(deletionDistance(str1, str2, s1Len, s2Len - 1), deletionDistance(str1, str2, s1Len - 1, s2Len));
}

// add deletionDistance(str1, str2, s1Len - 1, s2Len - 1) to the last return on line 21 to compare str2's minimum to the first

console.log(deletionDistance('some', 'thing'));
console.log(deletionDistance('dog', 'frog'));
console.log(deletionDistance('', ''));
