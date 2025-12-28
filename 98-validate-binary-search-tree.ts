function isValidBST(root: TreeNode | null): boolean {
  let min = 0;
  let max = 0;

  function dfs(node: TreeNode | null) {
    if (!node) {
      return true;
    }

    if (node.left) {
      if (node.left.val < node.val) {
        dfs(node.left);
      } else {
        return false;
      }
    }
    if (node.right) {
      if (node.right.val > node.val) {
        dfs(node.right);
      } else {
        return false;
      }
    }

    return true;
  }

  return dfs(root);
}
