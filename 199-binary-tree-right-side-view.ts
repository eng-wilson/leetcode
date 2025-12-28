function rightSideView(root: TreeNode | null): number[] {
  const ans: number[] = [];
  const bucket: number[][] = [];

  if (!root) {
    return [];
  }

  function bfs(node: TreeNode | null, level: number) {
    if (!node) {
      return;
    }

    if (!bucket[level]) {
      bucket.push([node.val]);
    } else {
      bucket[level].push(node.val);
    }

    bfs(node.left, level + 1);
    bfs(node.right, level + 1);
  }

  bfs(root, 0);

  for (let i = 0; i < bucket.length; i++) {
    ans.push(bucket[i][bucket[i].length - 1]);
  }

  return ans;
}
