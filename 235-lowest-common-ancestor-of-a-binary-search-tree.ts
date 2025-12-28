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

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode,
  q: TreeNode
): TreeNode | null {
  if (!root) return null;

  let lca: TreeNode | null = null;

  function dfs(node: TreeNode | null) {
    if (!node) return;

    if (
      (p?.val > node.val && q?.val < node.val) ||
      (p?.val < node.val && q?.val > node.val)
    ) {
      lca = node;
      return;
    }

    if (p.val === node.val) {
      lca = p;
      return;
    }
    if (q.val === node.val) {
      lca = q;
      return;
    }

    if (p.val < node.val && q.val < node.val) {
      dfs(node.left);
    }
    if (p.val > node.val && q.val > node.val) {
      dfs(node.right);
    }
  }

  dfs(root);
  return lca;
}
