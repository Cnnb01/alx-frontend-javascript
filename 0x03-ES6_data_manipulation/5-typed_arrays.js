export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const typedArray = new Int8Array(buffer);
  if (position >= length || position < 0) {
    throw new Error('Position outside range');
  }
  typedArray[position] = value;
  return typedArray;
}

// const typedArray = new Int16Array([10,20,30,40,50])
// typedArray[1] = 60
// console.log(typedArray)
