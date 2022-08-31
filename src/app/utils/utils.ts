export function arrayContainsDuplicates(array: any[]) {
  const result = array.some((element) => {
    if (array.indexOf(element) !== array.lastIndexOf(element)) {
      return true;
    }
    return false;
  });
  return result;
}
