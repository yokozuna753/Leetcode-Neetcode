from typing import Optional
from collections import deque

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def maxDepthDFS(self, root: Optional[TreeNode]) -> int:
        # if the root is None return 0
        # do a DFS all the way to the last node
        # return the max between left and right nodes up the stack
        if not root:
            return 0
        
        left = self.maxDepthDFS(root.left)
        right = self.maxDepthDFS(root.right)

        return max(left, right) + 1
    
    def maxDepthBFS(self, root: Optional[TreeNode]) -> int:
        # use a queue, start with root node
        # if the root is None, return 0
        # process the current node
        pass