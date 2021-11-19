// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function items (a, b, c) {
//     if ( a < b && a < c) {
//         console.log(a);
//     }
//     else if ( b < a && b < c) {
//         console.log(b);
//     }
//     else if ( c < a && c < b) {
//         console.log(c);
//     }
// }
//
// items ( 35, 4, 60);
//
// // - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
//
// function numbers (arg1, arg2, arg3) {
//     if ( arg1 > arg2 && arg1 >arg3) {
//         console.log(arg1);
//     }
//     else if (arg2 > arg1 && arg2 > arg3) {
//         console.log(arg2);
//     }
//     else if (arg3 > arg1 && arg3 > arg2) {
//         console.log(arg3);
//     }
// }
//
// numbers(100, 200, 3000);
//
// // - створити функцію яка повертає найбільше число з масиву
//
// let result = 0;
//
// function listNumbers (x, y, z) {
//     if  (x > y && x > z) {
//         result = x;
//         return result;
//     }
//     else if ( y > x && y > z) {
//         result = y;
//         return result;
//     }
//     else if ( z > x && z > y) {
//         result = z;
//         return result;
//     }
// }
//
// listNumbers( 21, 31, 41);
// console.log(result)
//
// // - створити функцію яка повертає найменьше число з масиву
//
//
// function list (num1, num2, num3) {
//     let res = 0;
//
//     if (num1 < num2 && num1 < num3) {
//         res = num1;
//     }
//     else if (num2 < num1 && num2 < num3) {
//         res = num2;
//     }
//     else if (num3 < num1 && num3 < num2) {
//         res = num3;
//     }
//     return res;
// }
//
// let a = list(33,16, 6);
// console.log(a);
//
//
// // - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//
// function  massive (numbers) {
//     let r = 0;
//     for (const number of numbers) {
//         r = r + number;
//     }
//     return r;
// }
//
// let sum = massive([2,4,5,6,88,76,56]);
// console.log(sum);
//
// // - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
//
// function numbersList (items) {
//     let s = 0;
//     for (const item of items) {
//         s = (s + item)/ items.length;
//     }
//     return s;
// }
//
// let summary = numbersList([100, 200, 300]);
// console.log(summary);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// function m() {
//     let max = arguments[0];
//     let min = arguments[0];
//     for (let i = 0; i < arguments.length; i++) {
//         if (min < arguments[i]) {
//             max = arguments[i]
//         } else min = arguments[i]
//     }
//     console.log(max, 'max')
//     return min
// }
//
// let minimal = m(1, 3, 4, 5, 6, 7, 88, 99, -11, 1050);
// console.log(minimal);

// - створити функцію яка заповнює масив рандомними числами// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// function random() {
//     let a = [];
//     for (let i = 0; i < 100; i++) {
//         a[a.length] = Math.round(Math.random() * 100);
//     }
//     console.log(a);
// }
//
// random();


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.


// function ran(num, count) {
//     let b = [];
//     for (let i = 0; i < count; i++) {
//         b[b.length] = Math.round(Math.random() * num);
//     }
//     console.log(b);
// }
//
// ran(50, 10);

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

let mass = [1, 3, 5, 7, 9, 10];

function massive3 (m) {
    let z = [];
    for (let i = m.length - 1; i >= 0; i--) {
        z.push(m[i])
    }
    console.log(z);
}

massive3(mass);