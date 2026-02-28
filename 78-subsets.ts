function subsets(nums: number[]): number[][] {
  const res: number[][] = [];
  const subset: number[] = [];

  function dfs(index: number) {
    if (index >= nums.length) {
      res.push([...subset]);
      return;
    }

    subset.push(nums[index]);
    dfs(index + 1);

    subset.pop();
    dfs(index + 1);
  }
  dfs(0);
  return res;
}
