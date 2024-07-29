export default function appendToEachArrayValue(array, appendString) {
  const newArr = [];
  for (const idx of array) {
    const newApnd = appendString + idx;
    newArr.push(newApnd);
  }

  return newArr;
}
