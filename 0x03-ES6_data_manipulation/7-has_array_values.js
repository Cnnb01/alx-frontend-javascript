export default function hasValuesFromArray(aSet, anArray) {
  for (const value of anArray) {
    if (!aSet.has(value)) {
      return false;
    }
  }
  return true;
}
