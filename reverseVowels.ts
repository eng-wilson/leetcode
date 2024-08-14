function reverseVowels(s: string): string {
  let answer = s.split("");
  let i = 0;
  let j = answer.length - 1;

  let vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
  };

  while (i <= j) {
    if (vowels[answer[i].toLowerCase()] && vowels[answer[j].toLowerCase()]) {
      let temp = answer[i];
      answer[i] = answer[j];
      answer[j] = temp;
      i++;
      j--;
    } else {
      if (!vowels[answer[i].toLowerCase()]) {
        i++;
      }
      if (!vowels[answer[j].toLowerCase()]) {
        j--;
      }
    }
  }

  return answer.join("");
}
