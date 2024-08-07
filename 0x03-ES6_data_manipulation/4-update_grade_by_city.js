export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((obj) => obj.location === city)
    .map((obj) => {
      // look for grade matching student id
      const theGrade = newGrades.find((grade) => grade.studentId === obj.id);
      // if grade isn't provided
      const aGrade = theGrade ? theGrade.grade : 'N/A';
      return { ...obj, grade: aGrade };
    });
}
