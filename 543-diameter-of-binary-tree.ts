/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function diameterOfBinaryTree(root: TreeNode | null): number {
  let res = 0;

  function getHeight(root: TreeNode | null): number {
    if (!root) return 0;

    let left = getHeight(root.left);
    let right = getHeight(root.right);

    res = Math.max(res, left + right);

    return 1 + Math.max(left, right);
  }

  getHeight(root);

  return res;
}
