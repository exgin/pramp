/* return the buiest time in the mall

Data is sorted based off asc -> desc

Input:  [ [1487799425, 14, 1], 
           [1487799425, 4,  0],
           [1487799425, 2,  0],
  -->      [1487800378, 10, 1], 1487800378
           [1487801478, 18, 0],
           [1487801478, 18, 1],
           [1487901013, 1,  0],
           [1487901211, 7,  1],
           [1487901211, 7,  0] 
         ]

425 -> 14 -4 = 10 -2 = 8
378 -> 8 + 10 -> 18
478 -> 18 - 18 = 0
013 -> 0 -> 1
221 -> 1 + 7 = 8 - 7 => 1

Expected Output: 1487800378 seconds -> busiest time of the year

                                    1 = entered
                                    0 = exited
[time entered, amount of visitors, enter/exist]
fn(data)

Approach:
iterative with counters

edge case (1) people. are the same amount --> earliest time returned
*/

function findBusiestPeriod(data) {
  let count = 0;
  let maxCount = 0;
  let maxPeriodTime = 0;

  for (let i = 0; i < data.length; i++) {
    // update the count
    if (data[i][2] === 1) {
      count += data[i][1];
    } else if (data[i][2] === 0) {
      count -= data[i][1];
    }

    // solve edge case, if data is the same
    // while we're still in the loop AND our time stamps are the same, keep looping
    if (i < data.length - 1 && data[i][0] === data[i + 1][0]) continue;

    if (count > maxCount) {
      // set the count to current max count
      maxCount = count;
      // get the maxPeriod time
      maxPeriodTime = data[i][0];
    }
  }
  return maxPeriodTime;
}
const data = [
  [1487799425, 14, 1],
  [1487799425, 4, 0],
  [1487799425, 2, 0],
  [1487800378, 10, 1],
  [1487801478, 18, 0],
  [1487801478, 18, 1],
  [1487901013, 1, 0],
  [1487901211, 7, 1],
  [1487901211, 7, 0],
];

console.log(findBusiestPeriod(data));
