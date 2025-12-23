function invertTree(root: TreeNode | null): TreeNode | null {
  function invert(root: TreeNode | null) {
    if (!root) {
      return;
    }

    invert(root.left);
    invert(root.right);

    const aux = root.left;
    root.left = root.right;
    root.right = aux;
  }

  invert(root);

  return root;
}
