function checkInclusion(s1: string, s2: string): boolean {
  if (s1.length > s2.length) {
    return false;
  }
  const map1: number[] = Array(26).fill(0);
  const map2: number[] = Array(26).fill(0);

  let charCodeA = "a".charCodeAt(0);

  for (let i = 0; i < s1.length; i++) {
    let charCode1 = s1[i].charCodeAt(0);
    let charCode2 = s2[i].charCodeAt(0);
    map1[charCode1 - charCodeA] += 1;
    map2[charCode2 - charCodeA] += 1;
  }

  if (sameFreq(map1, map2)) return true;

  for (let i = s1.length; i < s2.length; i++) {
    let charCode = s2[i].charCodeAt(0) - charCodeA;
    let previousCharCode = s2[i - s1.length].charCodeAt(0) - charCodeA;

    map2[charCode] += 1;
    map2[previousCharCode] -= 1;

    console.log(map1, map2);

    if (sameFreq(map1, map2)) {
      return true;
    }
  }

  function sameFreq(a: number[], b: number[]): boolean {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }

    return true;
  }

  return false;
}

// console.log(checkInclusion("ab", "eidboaooo"));
