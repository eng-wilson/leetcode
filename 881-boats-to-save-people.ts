/*
1. Sort the people
2. Use two pointers to sum the total of people that fit in a bot
*/

function numRescueBoats(people: number[], limit: number): number {
  let boats = 0;
  let left = 0;
  let right = people.length - 1;

  people.sort((a, b) => a - b);

  while (left <= right) {
    if (people[left] + people[right] > limit) {
      boats++;
      right--;
    } else {
      boats++;
      right--;
      left++;
    }
  }

  return boats;
}
console.log(numRescueBoats([3, 2, 2, 1], 3));
