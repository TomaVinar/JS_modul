// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function p (a, b) {
//     return a * b;
// }
// let result = p(2, 4);
// console.log(result);

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// const PI = 3.14;
// function s (r) {
//     return PI* (r**2);
// }
// let result1 = s (20);
// console.log(result1);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r


// function square ( h, r) {
//     return (PI*2) * h *r;
// }
// let result2 = square (8,4);
// console.log(result2);

// - створити функцію яка приймає масив та виводить кожен його елемент

function m (massive) {
    for (const massiveElement of massive) {
        console.log(massiveElement);
    }
}

m ([1, 2, 3, 4]);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function paragraph (arg) {
//     document.write(arg)
// }
// paragraph ('ТЕКСТ - В лингвистике: письменная или звучащая речь, которая внутренне организована и относительно закончена');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function listItems (text1) {
//     for (let i = 0; i < 3; i++) {
//         document.write(`<li>${text1}</li>`);
//     }
// }
// listItems ('Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function list (text, size) {
//     document.write(`<ul>`)
//     for (let i = 0; i < size; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`);
// }
//
// list('Вначале идёт ключевое слово function , после него имя функции', 3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// function mas (massive) {
//     document.write(`<ul>`);
//     for (let i = 0; i < massive.length; i++) {
//         document.write(`<li>${massive[i]}</li>`);
//     }
//     document.write(`</ul>`);
// }
//
// mas ([333, 444, 555, 666, 777]);



// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок

// function list1 (massive1) {
//     for (let i = 0; i < massive1.length; i++) {
//             document.write(`<div>${massive1[i].name} -- ${massive1[i].age} -- ${massive1[i].id}</div>`);
//     }
// }
//
// list1 ([ {id: 1213, name: 'QWE', age: 24}, {id: 1213, name: 'ASDASD',age: 24}, {id: 1213, name: 'vasya', age: 24}]);
//
