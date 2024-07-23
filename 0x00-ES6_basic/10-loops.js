export default function appendToEachArrayValue(array, appendString) {
    let newArr = []
    for (let idx of array) {
    //   let value = array[idx];
      let newApnd = appendString + idx;
      newArr.push(newApnd)
    }
  
    return newArr;
  }