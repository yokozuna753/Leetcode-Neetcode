from typing import List


"""
Input: matrix = [
[1,2,4,8], l
[10,11,12,13], m
[14,20,30,40] r
], target = 10

Output: true


if target exists => true, false otherwise

target = 10
binary search means using two pointers and middle value

l.  m.    r
- is target <= last value in m's subarray, and >= the first value in m
    - binary search through the middle subarray
        - if target is in the middle, return true
        - is target < mid? move right to mid - 1
        - is target > mid? move left to mid + 1
    - if not
        - check if the target is <= mid's last value
        - yes:
            - move right to mid - 1
        - no:
            - move left to mid + 1


Input: matrix = [
[1,2,4,8],
[10,11,12,13],
[14,20,30,40]
], target = 15

Output: false

lOuter = 0
rOuter = 2
midOuter = 1
"""


class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        lOuter, rOuter = 0, len(matrix) - 1

        while lOuter <= rOuter:
            midOuter = (lOuter + rOuter) // 2  # mid index
            
            if (
                target <= matrix[midOuter][-1] and target >= matrix[midOuter][0]
            ):  # inner binary search
                # print(f'first element: {matrix[midOuter][0]}, last element: {matrix[midOuter][-1]}')
                l, r = 0, len(matrix[midOuter]) - 1
                while l <= r:
                    mid = (l + r) // 2
                    if matrix[midOuter][mid] == target:
                        return True
                    elif target < matrix[midOuter][mid]:
                        r = mid - 1
                    else:
                        l = mid + 1
                return False
            elif target < matrix[midOuter][0]:
                rOuter = midOuter - 1
            else:
                lOuter = midOuter + 1

        return False


# test = Solution()
# print(
#     test.searchMatrix(
#         matrix=[[1, 2, 4, 8], [10, 11, 12, 13], [14, 20, 30, 40]], target=10
#     )
# )
test2 = Solution()
print(
    test2.searchMatrix(
        matrix=[[1, 2, 4, 8], [10, 11, 12, 13], [14, 20, 30, 40]], target=15
    )
)
