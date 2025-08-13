from typing import Optional

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:   

    def sameTree(self, rootMain: Optional[TreeNode], rootSub: Optional[TreeNode]):
        '''
        Compares the nodes at every level to check for equality with DFS.
        '''
        if not rootMain and not rootSub:
            return True
        if not rootMain or not rootSub:
            return False
        if rootMain.val != rootSub.val:
            return False
        return self.sameTree(rootMain.left, rootSub.left) and self.sameTree(
            rootMain.right, rootSub.right
        )
        # if the end of the trees is reached, return true as they are the same
        # if the nodes at the current level are not equal, return false
        # return the results of calling the function for left and right, with and KW

    def isSubtree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:
        '''
        Go through each node in the trees until the last ones are reached
        '''
        if not root or not subRoot:
            return False
        if self.sameTree(root, subRoot):
            return True
        
        return self.isSubtree(root.left ,subRoot) or self.isSubtree(root.right, subRoot)
        