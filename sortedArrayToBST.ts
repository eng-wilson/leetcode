function sortedArrayToBST(nums: number[]): TreeNode | null {
  function helper(left: number, right: number) {
    if (left > right) {
      return null;
    }

    let middle = Math.floor(left + (right - left) / 2);
    let root = new TreeNode(nums[middle]);

    root.left = helper(left, middle - 1);
    root.right = helper(middle + 1, right);

    return root;
  }

  return helper(0, nums.length - 1);
}
