from typing import Optional

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        if not root:
            return None
        root.left, root.right = root.right, root.left
        self.invertTree(root.left)
        self.invertTree(root.right)

        return root

# base case: if the root doesnt exist, return null.
# flip the left and right nodes
# if the node has a left, recurse left
# same for right
# return the root node


def inorder_traversal(root: Optional[TreeNode]):
    if root is None:
        return []
    return inorder_traversal(root.left) + [root.val] + inorder_traversal(root.right)

root = TreeNode(4,
        TreeNode(2, TreeNode(1), TreeNode(3)),
        TreeNode(7, TreeNode(6), TreeNode(9))
    )

print("Original tree inorder:", inorder_traversal(root))

sol = Solution()
inverted_root = sol.invertTree(root)

print("Inverted tree inorder:", inorder_traversal(inverted_root))