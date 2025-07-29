

def extract_remove_last_digit(n) -> None:
    while(n > 0):
        print(f'Current N: {n}')
        last = n % 10
        print(f'Last Digit {last}')
        n = n // 10
        print(f'New N: {n}\n')



''' 
step = 3
subsets = [[1],[2,3]]
[4,5,6] -> len = 3


'''
def create_staircase(nums):
  step = 1
  subsets = []
  while len(nums) != 0:
    if len(nums) >= step: # if the length of input nums >= step
      subsets.append(nums[0:step])
      nums = nums[step:]
      step += 1
    else:
      return False
      
  return subsets



print(create_staircase([1,2,3,4,5,6]))
nums = [1,2,3,4,5,6]
print(nums[0:2])


