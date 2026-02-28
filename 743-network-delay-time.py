from collections import defaultdict
from typing import List
import heapq


class Solution:
    def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:
        graphs = defaultdict(list)

        for u,v,w in times:
            graphs[u].append((v,w))

        minTimes = {}
        minHeap = [(0,k)]

        while minHeap:
            cumulativeCost, node = heapq.heappop(minHeap)

            if node in minTimes:
                continue
            
            minTimes[node] = cumulativeCost
            
            for neighbor, neighborDistance in graphs[node]:
                if neighbor in minTimes:
                    continue
                
                heapq.heappush(minHeap, (cumulativeCost + neighborDistance, neighbor))
        
        if len(minTimes) == n:
            return max(minTimes.values())
        
        return -1