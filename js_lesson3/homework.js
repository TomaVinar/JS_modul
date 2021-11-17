// -створити масив з:
// - з 5 числових значень
// - з 5 стрічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let numbers = [31, 41, 51, 61, 71];
// console.log(numbers);
// let names = ['apple', 'orange', 'strawberry', 'pineapple', 'piper'];
// console.log(names);
// let items = [[1, 2, 3, 4, 5], ['name', 'age', 'status', 'phone', 'country'], [true, false]];
// console.log(items[0], items[1], items[2]);


// - Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let mas = [];
// mas[0] = 'xxx';
// mas[1] = 'asad';
// mas[2] = 'drgdh';
// mas[3] = 100;
// mas[4] = 1000;
// mas[5] = 2000;
// console.log(mas);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let i = 0; i < 10; i++) {
//     document.write('<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>')
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// let massive = ['Vasya', 'Olya', 'Roman', 'Nastya', 'Viktor', 'Egor', 'Victoria', 'Maria', 'Slava', 'Stas'];
// for (let i = 0; i < massive.length; i++) {
//     document.write(`<div>Привіт новий користувач ${massive[i]} </div>`);
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let titles = ['Назва книжки', 'Назва книжки', 'Назва книжки', 'Назва книжки', 'Назва книжки', 'Назва книжки', 'Назва книжки','Назва книжки','Назва книжки','Назва книжки','Назва книжки','Назва книжки','Назва книжки', 'Назва книжки', 'Назва книжки', 'Назва книжки', 'Назва книжки', 'Назва книжки', 'Назва книжки', 'Назва книжки', 'Назва книжки'];
// let i = 0;
// while (i < titles.length) {
//     let currentTitle = titles[0];
//     document.write(`<h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, eveniet ${currentTitle}</h1>`);
//     i++;
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let books = [
//     {
//         name: 'Little Dorrit',
//         author: 'Charles Dickens',
//         pages: 546
//     },
//     {
//         name: 'Claws',
//         author: 'John Landon',
//         pages: 746
//     },
//     {
//         name: 'The Ghost',
//         author: 'Robert Harris',
//         pages: 835
//     },
//     {
//         name: 'The Ghost',
//         author: 'Robert Harris',
//         pages: 835
//     },
//     {
//         name: 'The Ghost',
//         author: 'Robert Harris',
//         pages: 835
//     },
//     {
//         name: 'The Ghost',
//         author: 'Robert Harris',
//         pages: 835
//     },
//     {
//         name: 'The Ghost',
//         author: 'Robert Harris',
//         pages: 835
//     },
//     {
//         name: 'The Ghost',
//         author: 'Robert Harris',
//         pages: 835
//     },
//     {
//         name: 'The Ghost',
//         author: 'Robert Harris',
//         pages: 835
//     },
//     {
//         name: 'The Ghost',
//         author: 'Robert Harris',
//         pages: 835
//     },
//     {
//         name: 'The Ghost',
//         author: 'Robert Harris',
//         pages: 835
//     },
//     {
//         name: 'The Ghost',
//         author: 'Robert Harris',
//         pages: 835
//     },
//     {
//         name: 'The Ghost',
//         author: 'Robert Harris',
//         pages: 835
//     },
//     {
//         name: 'The Ghost',
//         author: 'Robert Harris',
//         pages: 835
//     },
//     {
//         name: 'The Ghost',
//         author: 'Robert Harris',
//         pages: 835
//     },
//     {
//         name: 'The Ghost',
//         author: 'Robert Harris',
//         pages: 835
//     },
//     {
//         name: 'The Ghost',
//         author: 'Robert Harris',
//         pages: 835
//     },
//     {
//         name: 'The Ghost',
//         author: 'Robert Harris',
//         pages: 835
//     },
//     {
//         name: 'The Ghost',
//         author: 'Robert Harris',
//         pages: 835
//     },
//     {
//         name: 'The Ghost',
//         author: 'Robert Harris',
//         pages: 835
//     }
// ];
//
// let a = 0;
// while (a < books.length) {
//     let currentBook = books[a];
//     document.write(`<h1>Нове надходження ${currentBook.name} - ${a+1}</h1>`);
//     a++;
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let massive2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let j = 0; j < massive2.length; j++) {
//     const massive2Element = massive2[j];
//     console.log(massive2Element);
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let massive3 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
// let b = 0;
// while ( b < massive3.length ) {
//     let item = massive3[b];
//     console.log(item);
//     b++;
// }


// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let massive4 = ['wolf', 'tiger', 'cat', 'dog', 566, 199, 0, 666, true, false];
// for (let j = 0; j < massive4.length; j++) {
//     console.log(massive4[j]);
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let massive = ['djhb', 'xdhkxfjg', 'xfhx', 'fghch', 566, 199, 0, 666, true, false];
// for (let i = 0; i < massive.length; i++) {
//     if (typeof massive[i] === "boolean") {
//         console.log(massive[i]);
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let products = ['first', 'second', 'third', 999, 888, 777, true, false];
// for (let i = 0; i < products.length; i++) {
//     const product = products[i];
//     if (typeof product === 'number') {
//         console.log(product);
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let mass = [1000000, 20000000, 30000000, true, false, 'item', 'item', 'item', 'item'];
// for (let i = 0; i < mass.length; i++) {
//     const mass1 = mass[i];
//     if (typeof mass[i] === 'string') {
//         console.log(mass[i]);
//     }
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
//
// let massEmpty = [];
// massEmpty[0] = 123;
// massEmpty[1] = 456;
// massEmpty[2] = 789;
// massEmpty[3] = true;
// massEmpty[4] = false;
// massEmpty[5] = 'name';
// massEmpty[6] = 'age';
// massEmpty[7] = 'status';
//
// for (let i = 0; i < massEmpty.length; i++) {
//     const massEmptyElement = massEmpty[i];
//     console.log(massEmpty)
// }
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

let massiveN = [1000000, 20000000, 30000000, true, false, 'item', 'item', 'item', 'item'];

// for (let i = 0; i < 10; i++) {
//     let massiveNelement = massiveN[i];
//     console.log(massiveNelement, i);
//     document.write(`<div>${massiveNelement} - ${i + 1}</div>`);
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let j = 0; j < 100; j++) {
//     const element = massiveN[j];
//     console.log(element, j);
//     document.write(`<div>${element} - ${j+1}</div>`);
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let a = 0; a < 100; a+=2) {
//     let item = massiveN[a];
//     console.log(a);
//     document.write(`<div>${item} - ${a}</div>`);
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

for (let l = 0; l < 100 - 1; l++) {
    const masEl = massiveN[l];
    if ( l % 2 === 0) {
        console.log(masEl);
        document.write(`<div>${masEl} - ${l}`);
    }
}


// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

for (let i = 0; i < 100 + 1; i++) {
    const massiveNElement = massiveN[i];
    if ( i % 2 !== 0) {
        console.log(massiveN[i]);
        document.write(`<div>${massiveNElement} - ${i}</div>`);
    }
}