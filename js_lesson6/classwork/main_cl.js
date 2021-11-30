// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
//
// let fn = (str, symbol) => {
//     array = [];
//     if (str.includes(symbol)) {
//         let s = str.split(symbol);
//         s.forEach((item) => {
//             if (item) array.push(item);
//         })
//         console.log(array.join(' '));
//     }
// }
//
// fn (n1, '.');
// fn (n2, '-');
// fn (n3, '_');

//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

let f = () => {
    let m = [];
    for (let i = 0; i < 10; i++) {
       m[i] = Math.floor(Math.random() * 100);
    }
    return m;
}

let array = f();
console.log(array);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

let massive = () => {
    let mas = [];
    for (let i = 0; i < 10; i++) {
       mas[i] = Math.random()*100 | 0;
    }
    return mas.sort ((a, b) => a - b);
}

console.log(massive());


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа

let mas13 = () => {
    let mas31 = [];
    for (let i = 0; i < 10; i++) {
        mas31[i] = Math.floor(Math.random()*100);
        mas31.push(mas31[i]);
    }
    return mas31.filter(value => value % 2 === 0);
}

console.log(mas13());

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

let arrayM = [100, 200, 300, 60, 70, 80, 90];

let nums = (array) => {
   return array.map(value => value.toString());
}

console.log(nums(array));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

let massive1 = [11, 21, 3];

let sortNums = (direction) => {
    if (direction >= 5) {
        return massive1.sort((c, d) => c - d);
    }
    else if (direction < 5) {
        return massive1.sort ((c, d) => d - c);
    }
}

console.log(sortNums(5));

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];


// let array12 = (massive) => {
//    return massive.sort((a ,b) => a.monthDuration - b.monthDuration);
// }
//
// console.log(array12(coursesAndDurationArray));

let array21 = (mass) => {
    return mass.filter(value => value.monthDuration > 5);
}

console.log(array21(coursesAndDurationArray));

// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

let str111 = 'Каждый охотник желает знать';

let cutString = (str, n) => {
    const arr = []
    for (let i = 0; i < str.length; i+=n) {
        arr.push(str.slice(i, i+n))
    }
    return arr;
}

document.write(cutString(str111, 3));

