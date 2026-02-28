/**
 * The knows API is defined in the parent class Relation.
 * knows(a: number, b: number): boolean {
 *     ...
 * };
 */

var solution = function (knows: any) {
  return function (n: number): number {
    let possibleCelebrity = 0;
    for (let i = 0; i < n; i++) {
      if (i === possibleCelebrity) continue;
      if (knows(possibleCelebrity, i) && !knows(i, possibleCelebrity)) {
        possibleCelebrity = i;
      }
    }

    function isCelebrity() {
      for (let i = 0; i < n; i++) {
        if (i === possibleCelebrity) continue;

        if (knows(possibleCelebrity, i) || !knows(i, possibleCelebrity)) {
          return false;
        }
      }

      return true;
    }

    if (isCelebrity()) {
      return possibleCelebrity;
    }
    return -1;
  };
};
