def twoSum(numbers: list[int], target: int) -> list[int]:
    '''
    iterate through the list of nums
    - set pointers left and right
    - if sum of pointers add up to target, return the 1 based indices
    - if sum > target, decrease right pointer
    - if sum < target, increase left pointer
    '''
    l, r = 0, len(numbers) - 1
    
    while l < r:
        num_sum = numbers[l] + numbers[r]

        if num_sum == target:
            return [l + 1, r + 1]
        elif num_sum > target:
            r -= 1
        else:
            l += 1


print(twoSum([2,7,11,15], target = 9))
print(twoSum(numbers = [2,3,4], target = 6))
print(twoSum(numbers = [-1,0], target = -1))