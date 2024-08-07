export default function updateUniqueItems(argg) {
  argg.forEach((value, key) => {
    if (value === 1) {
      argg.set(key, 100);
    }
    throw new Error('Cannot process');
  });
  return argg;
}
