class Solution:
    def twoSum(nums: list[int], target: int) -> list[int]:
        hash_table = {}

        for i in range(len(nums)):
            res_num = target - nums[i]
            if nums[i] in hash_table:
                return [hash_table[nums[i]], i]
            hash_table[res_num] = i

print(Solution.twoSum(nums = [3,4,5,6], target = 7))



