from typing import List
from collections import defaultdict

class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        graphs = defaultdict(list)


        for courseNumber, dependency in prerequisites:
            graphs[courseNumber].append(dependency)

        states = [0] * numCourses
        
        def isValid(node: int):
            if states[node] == 1:
                return False
            if states[node] == 2:
                return True
            
            states[node] = 1

            for neighbor in graphs[node]:
                if not isValid(neighbor):
                    return False

            states[node] = 2
            return True
        
        for course in range(numCourses):
            if not isValid(course):
              return False
        
        return True
    

print(Solution().canFinish(2, [[1,0]]))
