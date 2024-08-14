function gcdOfStrings(str1: string, str2: string): string {
  if (str1 + str2 !== str2 + str1) {
    return "";
  }

  let size1 = str1.length;
  let size2 = str2.length;

  while (size2) {
    let aux = size2;
    size2 = size1 % size2;
    size1 = aux;
  }

  return str1.substring(0, size1);
}
