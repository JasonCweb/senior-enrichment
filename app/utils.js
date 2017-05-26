export const convertStudents = (campuses, students) => {
  students.forEach(function(student) {
    student.campus = campuses[campuses.findIndex(campus => {
      return campus.id === student.campusId;
    })].name
  });
  return students;
};
