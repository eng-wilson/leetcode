function trap(height: number[]): number {
  let sum = 0;

  let left = 0;
  let right = height.length - 1;

  let leftMax = 0;
  let rightMax = 0;

  while (left < right) {
    if (height[left] <= height[right]) {
      if (height[left] >= leftMax) {
        leftMax = height[left];
      } else {
        sum += leftMax - height[left];
      }
      left++;
    } else {
      // o lado direito é o "limitante" agora
      if (height[right] >= rightMax) {
        rightMax = height[right];
      } else {
        sum += rightMax - height[right];
      }
      right--;
    }
  }

  return sum;
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
