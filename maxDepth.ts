function maxDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  let result = 0;
  const queue: (TreeNode | null)[] = [root];

  while (queue.length) {
    const levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift();

      if (currentNode) {
        if (currentNode.left) {
          queue.push(currentNode.left);
        }
        if (currentNode.right) {
          queue.push(currentNode.right);
        }
      }
    }

    result++;
  }

  return result;
}
