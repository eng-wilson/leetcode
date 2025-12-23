function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  let result = true;
  function dfs(p: TreeNode | null, q: TreeNode | null) {
    if (p && !q) {
      result = false;
    }
    if (q && !p) {
      result = false;
    }
    if (!q) return;
    if (!p) return;

    if (p?.val !== q?.val) {
      result = false;
    }

    dfs(p.left, q.left);
    dfs(p.right, q.right);
  }

  dfs(p, q);
  return result;
}
