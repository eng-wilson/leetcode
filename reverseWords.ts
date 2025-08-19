function reverseWords(s: string): string {
  let phrase = s.split(" ").reverse();

  phrase = phrase.filter((s) => !!s);

  return phrase.join(" ");
}

console.log(reverseWords("  hello world  "));
