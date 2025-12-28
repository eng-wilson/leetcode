function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  if (!root) return root;

  if (key < root.val) {
    root.left = deleteNode(root.left, key);
  }
  if (key > root.val) {
    root.right = deleteNode(root.right, key);
  }

  if (key === root.val) {
    if (root.left) {
      return root.left;
    }
    if (root.right) {
      return root.right;
    }
    return null;
  }
  return root;
}
