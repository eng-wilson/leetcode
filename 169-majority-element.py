from collections import Counter

class Solution:
    def majorityElement(self, nums) -> int:
        count = 0
        result = nums[0]

        

        for n in nums:
            if (n == result):
                count += 1
            if (n != result):
                count -= 1
                if (count == 0):
                    result = n
                    count += 1
            

        return result
    


sol = Solution()

print(sol.majorityElement([6,5,5]))