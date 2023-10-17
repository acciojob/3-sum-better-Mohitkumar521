function threeSum(arr, target) {
// write your code here
   arr.sort((a, b) => a - b);

  let closestSum = Infinity;

  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      const currentSum = arr[i] + arr[left] + arr[right];

      // Update closestSum if the currentSum is closer to the target
      if (Math.abs(target - currentSum) < Math.abs(target - closestSum)) {
        closestSum = currentSum;
      }

      if (currentSum < target) {
        // If current sum is less than the target, move the left pointer to the right
        left++;
      } else {
        // If current sum is greater than or equal to the target, move the right pointer to the left
        right--;
      }
    }
  }

  return closestSum;
}


module.exports = threeSum;

const threeSumResult = threeSum([-1, 2, 1, -4], 1);
console.log(threeSumResult); // Output: 2

