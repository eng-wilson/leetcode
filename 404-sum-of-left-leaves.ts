function sumOfLeftLeaves(root: TreeNode | null): number {
  let sum = 0;

  if (!root || (!root.left && !root.right)) {
    return 0;
  }

  function bfs(node: TreeNode | null) {
    const queue: [TreeNode, "left" | "right" | null][] = [];

    if (!node) {
      return;
    }

    queue.push([node, null]);

    while (queue.length) {
      const [currentNode, lastDirection] = queue.shift()!;

      if (
        currentNode &&
        !currentNode.left &&
        !currentNode.right &&
        lastDirection === "left"
      ) {
        sum += currentNode.val;
      }
      if (currentNode && currentNode.left) {
        queue.push([currentNode.left, "left"]);
      }
      if (currentNode && currentNode.right) {
        queue.push([currentNode.right, "right"]);
      }
    }
  }

  bfs(root);

  return sum;
}
