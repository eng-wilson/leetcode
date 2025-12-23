function findDifference(nums1: number[], nums2: number[]): number[][] {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  const ans1 = new Set<number>();
  const ans2 = new Set<number>();

  for (let i = 0; i < nums1.length; i++) {
    if (!set2.has(nums1[i])) {
      ans1.add(nums1[i]);
    }
  }

  for (let i = 0; i < nums2.length; i++) {
    if (!set1.has(nums2[i])) {
      ans2.add(nums2[i]);
    }
  }

  return [[...ans1], [...ans2]];
}

console.log(findDifference([1, 2, 3], [2, 4, 6]));
