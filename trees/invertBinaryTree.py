# ! DFS

from typing import Optional
from collections import deque


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def invertTreeDFS(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        if not root:
            return None
        root.left, root.right = root.right, root.left
        self.invertTreeDFS(root.left)
        self.invertTreeDFS(root.right)

        return root

    def invertTreeBFS(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        # we'll use a queue to push nodes onto it at each level
        # flip the nodes (left and right)
        # return the root node at the end
        if not root:
            return None

        queue = deque([root])

        while queue:
            node = queue.popleft()
            node.left, node.right = node.right, node.left

            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
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


root = TreeNode(
    4, TreeNode(2, TreeNode(1), TreeNode(3)), TreeNode(7, TreeNode(6), TreeNode(9))
)

print("Original tree inorder:", inorder_traversal(root))

sol = Solution()
inverted_root = sol.invertTreeDFS(root)

print("Inverted tree inorder:", inorder_traversal(inverted_root))

# ! DFS


# ? BFS


def invertTree():
    pass


# ?BFS
