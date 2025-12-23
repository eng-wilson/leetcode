class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        
        l, r = 0, len(nums) - 1
        half = k % len(nums)

        while (l < r):
            nums[l], nums[r] = nums[r], nums[l]
            l+=1
            r-=1
        
        l, r = 0, half - 1

        while (l < r):
            nums[l], nums[r] = nums[r], nums[l]
            l+=1
            r-=1

        l, r = half, len(nums) - 1

        while (l < r):
            nums[l], nums[r] = nums[r], nums[l]
            l+=1
            r-=1
        """
        Do not return anything, modify nums in-place instead.
        """
        

sol = Solution()
print(sol.rotate([1,2,3,4,5,6,7], 3))