/* find the smallest nonnegative NOT in the array
link: https://www.pramp.com/challenge/aK6V5GVZ9MSPqvG1vwQp
*/

/* Checking the smallest number by using the Set's index */
function getDifferentNumer(nums) {
  const set = new Set();
  let nLen = nums.length;

  for (let i = 0; i < nLen; i++) {
    set.add(nums[i]);
  }

  for (let i = 0; i < nLen; i++) {
    // check if the set has the index value same as the index!
    console.log(i);
    if (set.has(i) === false) return i;
  }

  console.log(set);
  return nLen;
}

console.log(getDifferentNumer([0, 1, 7]));
