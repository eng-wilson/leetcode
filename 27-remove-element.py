class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        i = 0
        j = len(nums) - 1
        
        while (i <= j):
            if (nums[i] == val):
                if (nums[j] != val):
                    aux = nums[j]
                    nums[j] = nums[i]
                    nums[i] = aux
                    i = i + 1
                    j = j - 1
                else:
                    j = j - 1
            else:
                i = i + 1
                
        return i

    removeElement([3,2,2,3], 3)