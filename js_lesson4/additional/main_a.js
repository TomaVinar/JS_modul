
// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.

// function ar (items) {
//     let a = arguments[0];
//     let b = arguments[1];
//     for (let i = 0; i < arguments.length; i++) {
//         if (i !== 1) {
//             a = arguments[i];
//             console.log(a)
//         } else if (i !== 2 ) {
//             b = arguments[i];
//             console.log(a + b);
//         }
//     }
// }
// ar('hello', 'world');


// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

function massive (mas1, mas2) {
    mas3 = [];
    for (let i = 0, j = 0; i < mas1.length; i++, j++) {
        mas3.push(mas1[i] + mas2[j]);
    }
    return mas3;
}

let m = massive ([10, 20, 30, 40], [1, 2, 3, 4]);
console.log(m);

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

let person = [{name: 'Dima', age: 13}, {model: 'Camry'}];

function items (p) {
    let foo = [];
    for (let i = 0; i < p.length; i++) {
        const pElement = p[i];
        for (const elementKey in pElement) {
            foo.push(elementKey);
        }
    }
    console.log(foo);
}
items (person);


//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

let info = [{name: 'Dima', age: 13}, {model: 'Camry'}];

function list (f) {
    let mas12 = [];
    for (let i = 0; i < f.length; i++) {
            mas12.push (f[i]);
    }
    console.log(mas12);
}
list(info);
