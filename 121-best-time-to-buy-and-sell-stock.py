class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        output = 0
        lowest = 0
        highest = 0

        for n in range(len(prices)):
            if (prices[n] < prices[lowest]):
                lowest = n
                highest = n
            if (prices[n] > prices[highest] and n > lowest):
                highest = n
                new_output = prices[highest] - prices[lowest]
                if (new_output > output):
                    output = new_output
        

        return output