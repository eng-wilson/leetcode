class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function rob(root: TreeNode | null): number {
  function dfs(node: TreeNode | null): number[] {
    if (!node) {
      return [0, 0];
    }

    let left = dfs(node.left);
    let right = dfs(node.right);

    return [
      node.val + left[1] + right[1],
      Math.max(left[0], left[1]) + Math.max(right[0], right[1]),
    ];
  }

  const tuple = dfs(root);

  return Math.max(tuple[0], tuple[1]);
}
