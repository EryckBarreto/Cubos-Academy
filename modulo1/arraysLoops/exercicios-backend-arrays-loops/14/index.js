const arrayA = [5, 32, 3, 44, 1, 5, 34, 67, 1, 5];
const arrayB = [57, 4, 21, 2, 13, 6, 7, 21, 5, 32];
const arrayC = [];

let numeroMenor = arrayA[0];

for (let i = 0; i < arrayA.length; i++) {
    if (arrayA[i] < arrayB[i]) {
        numeroMenor = arrayA[i];
        arrayC.push(arrayA[i]);
    } else {
        numeroMenor = arrayB[i];
        arrayC.push(arrayB[i]);
    }
}

console.log(arrayC);
