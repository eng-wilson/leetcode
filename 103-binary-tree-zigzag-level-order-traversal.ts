function zigzagLevelOrder(root: TreeNode | null): number[][] {
  const result: number[][] = [];

  function bfs(node: TreeNode | null, level: number) {
    if (!node) {
      return;
    }

    if (result[level]) {
      result[level].push(node.val);
    } else {
      result[level] = [node.val];
    }

    bfs(node.left, level + 1);
    bfs(node.right, level + 1);
  }

  bfs(root, 0);

  for (let i = 1; i < result.length; i += 2) {
    result[i] = result[i].reverse();
  }

  return result;
}
