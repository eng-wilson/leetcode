function longestSubarray(nums: number[], limit: number): number {
  if (nums.length <= 1) {
    return 1;
  }

  let answer = 0;

  const maxQueue: number[] = [];
  const minQueue: number[] = [];

  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    let num = nums[right];

    while (maxQueue.length >= 0 && maxQueue[maxQueue.length - 1] < num) {
      maxQueue.pop();
    }
    while (minQueue.length >= 0 && minQueue[minQueue.length - 1] > num) {
      minQueue.pop();
    }

    maxQueue.push(num);
    minQueue.push(num);

    while (maxQueue[0] - minQueue[0] > limit) {
      let leftNum = nums[left];

      if (leftNum === maxQueue[0]) {
        maxQueue.shift();
      }
      if (leftNum === minQueue[0]) {
        minQueue.shift();
      }
      left++;
    }

    answer = Math.max(answer, right - left + 1);
  }

  return answer;
}

console.log(longestSubarray([8, 2, 4, 7], 4));
