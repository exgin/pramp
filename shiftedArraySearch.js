/* OG: [1,2,3,4,5] => [3,4,5,1,2] 
     ** shifted to the left ** 
        
        Input: shiftedArray, target
        Output: index of target
        
        shiftedArrSearch([3,4,5,1,2], 1) -> 3 | 
        
        shiftedArrSearch([3,4,5,1,2], 3) -> 0 | 2
        
        [1,2,3,4,5], 1

        shiftedArrSearch([3,4,5,6,7,1,2]

        left is smaller | right is larger
*/

function shiftedArrSearch(shiftArr, target, start = 0, end = shiftArr.length - 1) {
  if (shiftArr.length === 0) return -1;

  while (end >= start) {
    let mid = Math.floor((start + end) / 2);

    if (shiftArr[mid] === target) return mid;

    if (shiftArr[mid] > target) {
      // go left if our middle value is greater than the target value
      return shiftedArrSearch(shiftArr, target, start, mid - 1);
    } else if (shiftArr[mid] < target) {
      // go right if our middle value is greater than the target value
      return shiftedArrSearch(shiftArr, target, mid + 1, end);
    }
  }
  return -1;
}

console.log(shiftedArrSearch([1, 2, 3, 4, 5, 0], 0));
