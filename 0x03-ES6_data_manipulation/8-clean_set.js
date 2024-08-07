export default function cleanSet(aSet, startString) {
  const result = [];
  for (const value of aSet) {
    if (value.startsWith(startString)) {
      result.push(value.slice(startString.length));
    }
  }
  return result.join('-');
}
