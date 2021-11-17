// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//     1. перебрати його циклом while

let massive = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while ( i < massive.length) {
// console.log(i);
// i++;
// }

//     2. перебрати його циклом for

// for (let j = 0; j < massive.length; j++) {
//     const massiveElement = massive[j];
//     console.log(massiveElement);
//
// }

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом

// let b = 0;
// while (b < massive.length - 1) {
//     if (b % 2 !== 0) {
//         console.log(massive[b]);
//     }
//     b++;
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

// for (let c = 0; c < massive.length - 1; c++) {
//     const massiveElement = massive[c];
//     if (c % 2 !== 0) {
//         console.log(massiveElement);
//     }
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення

// let d = 0;
// while (d < massive.length) {
//     if (d%2 === 0) {
//         console.log(massive[d]);
//     }
//     d++;
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення

// for (let x = 0; x < massive.length; x++) {
//     const massiveElement = massive[x];
//     if (x%2 === 0) {
//         console.log(massiveElement);
//     }
// }

// 7. замінити кожне число кратне 3 на слово "okten"

// for (let y = 0; y < massive.length - 1; y++) {
//     if (y % 3 === 0) {
//         massive[y] = 'okten';
//         console.log(massive);
//     }
// }

// 8. вивести масив в зворотньому порядку.

// for (let i = massive.length - 1; i >= 0; i--) {
//     console.log(massive[i]);
// }

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// let i = massive.length - 1;
// while ( i > 0) {
//         console.log(massive[i])
//     i--;
// }
//
// for (let j = massive.length; j >= 0; j--) {
//     const massiveElement = massive[j];
//     console.log(massiveElement);
// }
//
// let b = massive.length - 1;
// while (b >= 0) {
//     if (b % 2 !== 0) {
//         console.log(massive[b]);
//     }
//     b--;
// }
//
// for (let c = massive.length - 1; c >= 0; c--) {
//     const massiveElement = massive[c];
//     if (c % 2 !== 0) {
//         console.log(massiveElement);
//     }
// }
//
//
// let d = massive.length - 1;
// while (d >= 0) {
//     if (d%2 === 0) {
//         console.log(massive[d]);
//     }
//     d--;
// }
//
// for (let x = massive.length - 1; x >= 0; x--) {
//     const massiveElement = massive[x];
//     if (x%2 === 0) {
//         console.log(massiveElement);
//     }
// }

for (let y = massive.length - 1; y >= 0; y--) {
    if (y % 3 === 0) {
        massive[y] = 'okten';
    }
    console.log(massive[y]);
}


