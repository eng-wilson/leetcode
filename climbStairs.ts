function climbStairs(n: number): number {
  let currentStep = 0;
  let previousStep = 1;
  let totalSteps = 0;

  for (let i = n - 1; i >= 0; i--) {
    totalSteps = currentStep + previousStep;
    currentStep = previousStep;
    previousStep = totalSteps;
  }
  return totalSteps;
}

console.log(climbStairs(3));
