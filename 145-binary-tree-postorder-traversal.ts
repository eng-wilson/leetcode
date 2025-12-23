function postorderTraversal(root: TreeNode | null): number[] {
  const ans: number[] = [];

  function postorder(root: TreeNode | null) {
    if (!root) return;

    postorder(root.left);
    postorder(root.right);
    ans.push(root.val);
  }

  postorder(root);
  return ans;
}
