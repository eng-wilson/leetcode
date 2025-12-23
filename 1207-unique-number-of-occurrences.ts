function uniqueOccurrences(arr: number[]): boolean {
  const hash = new Map();
  const seen = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (hash.has(arr[i])) {
      hash.set(arr[i], hash.get(arr[i]) + 1);
    } else {
      hash.set(arr[i], 1);
    }
  }

  for (const count of hash.values()) {
    if (seen.has(count)) {
      return false;
    } else {
      seen.add(count);
    }
  }
  return true;
}

console.log(uniqueOccurrences([1, 2]));
