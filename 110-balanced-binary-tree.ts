function isBalanced(root: TreeNode | null): boolean {
  let diff = 0;

  function getHeight(root: TreeNode | null): number {
    if (!root) return 0;

    let left = getHeight(root.left);
    let right = getHeight(root.right);

    diff = Math.max(diff, Math.abs(left - right));

    return 1 + Math.max(left, right);
  }

  getHeight(root);

  return diff >= 2 ? false : true;
}
