function isSubtree2(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (!root && !subRoot) {
    return true;
  }
  if (!root || !subRoot) {
    return false;
  }

  function isSameTree(n1: TreeNode | null, n2: TreeNode | null): boolean {
    if (!n1 && !n2) {
      return true;
    }
    if (!n1 || !n2) {
      return false;
    }
    return (
      n1.val === n2.val &&
      isSameTree(n1.left, n2.left) &&
      isSameTree(n1.right, n2.right)
    );
  }

  function dfs(node: TreeNode | null): boolean {
    if (!node) {
      return false;
    }
    if (isSameTree(node, subRoot)) {
      return true;
    }
    return dfs(node.left) || dfs(node.right);
  }

  return dfs(root);
}
