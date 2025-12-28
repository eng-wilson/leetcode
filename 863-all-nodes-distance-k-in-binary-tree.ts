function distanceK(
  root: TreeNode | null,
  target: TreeNode | null,
  k: number
): number[] {
  if (!root) return [];
  if (!target) return [];

  const answer: number[] = [];
  const map = new Map();
  const visited = new Set();

  function dfs(
    node: TreeNode | null,
    parent: TreeNode | null,
    distance: number,
    finding: boolean = false
  ) {
    if (!node) return;

    map.set(node, parent);

    if (distance === 0 && (finding || target?.val === node.val)) {
      answer.push(node.val);
    }
    if (node.val === target?.val) {
      visited.add(node);

      dfs(node.left, node, distance - 1, true);
      dfs(map.get(node), map.get(map.get(node)), distance - 1, true);
      dfs(node.right, node, distance - 1, true);
    }

    if (finding) {
      visited.add(node);
      if (!visited.has(node.left)) {
        dfs(node.left, node, distance - 1, true);
      }

      if (!visited.has(map.get(node))) {
        dfs(map.get(node), map.get(map.get(node)), distance - 1, true);
      }

      if (!visited.has(node.right)) {
        dfs(node.right, node, distance - 1, true);
      }
    }

    if (!finding) {
      dfs(node.left, node, distance);
      dfs(node.right, node, distance);
    }
  }

  dfs(root, null, k);

  return answer;
}
