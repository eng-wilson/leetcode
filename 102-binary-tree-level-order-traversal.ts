function levelOrder(root: TreeNode | null): number[][] {
  const res: number[][] = [];

  function bfs(node: TreeNode | null, level: number) {
    if (!node) {
      return;
    }

    if (res.length <= level) {
      res.push([]);
    }

    res[level].push(node.val);

    bfs(node.left, level + 1);
    bfs(node.right, level + 1);
  }

  bfs(root, 0);

  return res;
}
