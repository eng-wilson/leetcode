function levelOrder(root: TreeNode | null): number[][] {
  const answer: number[][] = [];

  if (!root) {
    return answer;
  }

  const queue: (TreeNode | null)[] = [root];

  while (queue.length) {
    const levelSize = queue.length;
    const currentLevel: number[] = [];

    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift();

      if (currentNode) {
        currentLevel.push(currentNode.val);
        if (currentNode.left) {
          queue.push(currentNode.left);
        }
        if (currentNode.right) {
          queue.push(currentNode.right);
        }
      }
    }

    answer.push(currentLevel);
  }

  return answer;
}
