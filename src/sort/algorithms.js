/* algorithms.js

Slap sorting algorithms in here. 

Every sorting algorithm should return an array that contains the 
order of pairs to swap. 
*/


// export class Pair {
//   constructor(first, second) {
//     this.first = first;
//     this.second = second;
//   }
// }

export function insertionSort(nums) {
  let sortOrder = []

  for (let i = 1; i < nums.length; i++) {
    let j = i - 1;
    let tmp = nums[i];
    let tmpi = i;
    while (j >= 0 && nums[j] > tmp) {
      nums[j + 1] = nums[j];
      j--;
    }
    nums[j+1] = tmp;
    sortOrder.push(nums.slice()) 
  }
  return sortOrder
}