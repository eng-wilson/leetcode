from typing import List


class Solution:
    def getConcatenation(self, nums: List[int]) -> List[int]:
        initial_range = len(nums)

        ans = nums
        for n in range(initial_range):
            ans.append(nums[n])

        return ans