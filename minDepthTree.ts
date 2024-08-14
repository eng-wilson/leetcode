function minDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
  if (!root.left) {
    return 1 + minDepth(root.right);
  } else {
    if (!root.right) {
      return 1 + minDepth(root.left);
    }
  }

  return 1 + Math.min(minDepth(root.left), minDepth(root.right));
}
