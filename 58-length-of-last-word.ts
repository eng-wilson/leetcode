function lengthOfLastWord(s: string): number {
  const newPhrase = s.split(" ");
  const lastWord = newPhrase.findLast((w) => w.length > 0);

  return lastWord?.length || 0;
}

console.log(lengthOfLastWord("   fly me   to   the moon  "));
