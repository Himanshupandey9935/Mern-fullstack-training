// student managment system 

const student = [
    {roll: 1, name: 'Aditi', marks: [78,85,92]},
    {roll: 2, name: 'Rahul', marks: [45,30,50]},
    {roll: 3, name: 'Sneha', marks: [88,91,79]},
    {roll: 4, name: 'Imran', marks: [33,28,40]},
    {roll: 5, name: 'Pooja', marks: [60,65,70]},
    {roll: 6, name: 'Vikram', marks: [95,98,90]},
    
];

const getstudentDetails = (roll) => {
    const studentDetails = student.find((student) => student.roll === roll);
    return studentDetails;
};
console.log(getstudentDetails(3));

const getStudentAverage = (roll) => {
    const studentDetails = getstudentDetails(roll);
    if (studentDetails) {
        const totalMarks = studentDetails.marks.reduce((acc, mark) => acc + mark, 0);
        const averageMarks = totalMarks / studentDetails.marks.length;
        return averageMarks;
    } else {
        return null;
    }
};
console.log(getStudentAverage(3));

const getStudentGrade = (roll) => {
    const averageMarks = getStudentAverage(roll);
    if (averageMarks !== null) {
        if (averageMarks >= 90) {
            return 'A';
        } else if (averageMarks >= 80) {
            return 'B';
        } else {
            return 'C';
        }
    } else {
        return null;
    }
};
console.log(getStudentGrade(3));

const result = student.map((student) => {
    const averageMarks = getStudentAverage(student.roll);
    const grade = getStudentGrade(student.roll);
    return { ...student, averageMarks, grade };
});
console.log(1, result);
