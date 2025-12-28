function kthSmallest(root: TreeNode | null, k: number): number {
  if (!root) return -1;

  const stack: number[] = [];

  function dfs(node: TreeNode | null) {
    if (!node) {
      return;
    }

    dfs(node.left);
    stack.push(node.val);
    dfs(node.right);
  }

  dfs(root);

  return stack[k - 1];
}
