function goodNodes(root: TreeNode | null): number {
  let ans = 0;

  function dfs(node: TreeNode | null, max: number) {
    if (!node) {
      return;
    }

    if (node.val >= max) {
      ans++;
      max = node.val;
    }

    dfs(node.left, max);
    dfs(node.right, max);
  }

  if (root) {
    dfs(root, root.val);
  }

  return ans;
}
