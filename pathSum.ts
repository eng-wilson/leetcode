function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) {
    return false;
  }

  if (!root.right && !root.left && targetSum === root.val) {
    return true;
  }

  if (root.left && hasPathSum(root.left, targetSum - root.val)) {
    return true;
  }

  if (root.right && hasPathSum(root.right, targetSum - root.val)) {
    return true;
  }

  return false;
}
