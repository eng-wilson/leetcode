function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (!subRoot) {
    return true;
  }

  if (!root) {
    return false;
  }

  if (checkTree(root, subRoot)) {
    return true;
  }

  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}

function checkTree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (!root && !subRoot) {
    return true;
  }

  if (root && subRoot && root.val === subRoot.val) {
    return (
      checkTree(root?.left, subRoot?.left) &&
      checkTree(root?.right, subRoot?.right)
    );
  }
  return false;
}
