// Array of student objects
const students = [
  {
    name: 'John',
    chemistryMarks: 80,
    biologyMarks: 90,
    dob: '03-04-2000',
  },
  {
    name: 'Alice',
    chemistryMarks: 90,
    biologyMarks: 85,
    dob: '15-02-1999',
  },
  {
    name: 'Bob',
    chemistryMarks: 75,
    biologyMarks: 85,
    dob: '20-07-2000',
  },
];

// Function to compare two students based on the sorting rules
function compareStudents(student1, student2) {
  // First priority: Total marks
  const totalMarksComparison =
    student2.chemistryMarks +
    student2.biologyMarks -
    (student1.chemistryMarks + student1.biologyMarks);
  if (totalMarksComparison !== 0) {
    return totalMarksComparison;
  }

  // Second priority: Biology marks
  const biologyMarksComparison = student2.biologyMarks - student1.biologyMarks;
  if (biologyMarksComparison !== 0) {
    return biologyMarksComparison;
  }

  // Third priority: Date of birth (considering format: DD-MM-YYYY)
  const dobComparison =
    new Date(student1.dob.split('-').reverse().join('-')) -
    new Date(student2.dob.split('-').reverse().join('-'));
  return dobComparison;
}

// Sorting the array of student objects
students.sort(compareStudents);

// Printing the sorted array
console.log(students);
