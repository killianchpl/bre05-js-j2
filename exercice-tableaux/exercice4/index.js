let grades = [
    [20, 10],
    [15, 20],
    [13, 18]
];

let somme = 0;
let count = 0;

for (let i = 0; i < grades.length; i++) {
    for (let m = 0; m < grades[i].length; m++) {
        somme += grades[i][m];
        count++;
    }
}


let average = somme / count;

console.log(average);
