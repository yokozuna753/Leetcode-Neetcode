class Solution:
    def threeSum(self, nums: list[int]) -> list[list[int]]:
        nums.sort()
        res = []
        for i in range(len(nums) - 2):
            if i > 0 and nums[i] == nums[i - 1]:
                continue  # skip duplicate nums[i]

            l, r = i + 1, len(nums) - 1
            while l < r:
                total = nums[i] + nums[l] + nums[r]
                if total == 0:
                    # print('NUMS == 0 ', nums[i] + nums[l] + nums[r])
                    res.append([nums[i], nums[l], nums[r]])
                                        # skip duplicates for nums[l] and nums[r]
                    while l < r and nums[l] == nums[l + 1]:
                        l += 1
                    while l < r and nums[r] == nums[r - 1]:
                        r -= 1  
                    l += 1
                    r -= 1
                elif total < 0:
                    l += 1
                else:
                    r -= 1
        print(res)

s = Solution()
s.threeSum(nums=[0,0,0])


'''
Input: [-1,0,1,2,-1,-4]

Output: [
[-1,-1,2],
[-1,0,1]
]


Input: nums = [0,1,1]

Output: []

Input: nums = [0,0,0]

Output: [[0,0,0]]

1. sort the input array => [-4,-1,-1,0,1,2]
2. use two loops
    - first loop picks a number - x - (first element in the array)
    - second loop checks L and R pointers - while L < R
    - if right pointer at the end of the array, move right pointer down
    - check if the sum is > or < 0.
        - if >, move R pointer - 1
        - if <, move L pointer + 1
    [-4,-1,-1,0,1,2]
      x  L        R

      [[-1,-1,2]]
'''