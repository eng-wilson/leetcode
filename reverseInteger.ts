function reverse(x: number): number {
  let answer = String(x);

  const minIntegerNumber = Math.pow(-2, 31); // -2147483648
  const maxIntegerNumber = Math.pow(2, 31) - 1; // 2147483647

  if (x > 0) {
    answer = answer.split("").reverse().join("");

    return Number(answer) > minIntegerNumber &&
      Number(answer) < maxIntegerNumber
      ? Number(answer)
      : 0;
  }

  answer = answer.split("").slice(1, answer.length).reverse().join("");

  return Number(answer) * -1 > minIntegerNumber &&
    Number(answer) * -1 < maxIntegerNumber
    ? Number(answer) * -1
    : 0;
}

console.log(reverse(-123));
