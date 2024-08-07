export default function getStudentsByLocation(students, city) {
  const heree = students.filter((obj) => obj.location === city);
  return heree;
}
