let student = {
    name: "Steven",
    age: 19,
    grades: [12, 14, 8],
    average: 0
};

let somme = 0;

for (let i = 0; i < student.grades.length; i++) {
    somme += student.grades[i];
}

student.average = somme / student.grades.length;

console.log(student.average);
