export default function getStudentIdsSum(students) {
  const myMap = students.map((obj) => obj.id);
  const sum = myMap.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return sum;
}
