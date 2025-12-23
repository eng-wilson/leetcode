function preorderTraversal(root: TreeNode | null): number[] {
  const ans: number[] = [];

  function preorder(root: TreeNode | null) {
    if (!root) {
      return;
    }

    ans.push(root.val);
    preorder(root.left);
    preorder(root.right);
  }

  preorder(root);

  return ans;
}
