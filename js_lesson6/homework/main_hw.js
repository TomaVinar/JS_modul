// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let a = 'hello world';
// let a1 = a.length;
// console.log(a1);
//
// let b = 'lorem ipsum';
// let b1 = b.length;
// console.log(b1);
//
// let c = 'javascript is cool';
// let c1 = c.length;
// console.log(c1);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let t = 'hello world';
// let t2 = t.toUpperCase();
// document.write(t2);
//
// let n = 'lorem ipsum';
// let n2 = n.toUpperCase();
// document.write(`<div>${n2}</div>`);
//
// let text = 'javascript is cool';
// let text1 = text.toUpperCase();
// document.write(`<div>${text1}</div>`);

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let x = 'HELLO WORLD';
let x1 = x.toLowerCase();
document.write(`<div>${x1}</div>`);

let y = 'LOREM IPSUM';
let y1 = y.toLowerCase();
document.write(`<div>${y1}</div>`);

let z = 'JAVASCRIPT IS COOL';
let z1 = z.toLowerCase();
document.write(`<div>${z1}</div>`);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
// let trim = str.trim();
// console.log(trim);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

// let str = 'Каждый охотник желает знать';
// let replace = str.replaceAll(' ', '-');
//
// let strToArray = () => {
//     let arr = replace.split('-');
//     console.log(arr);
// }
//
// strToArray(replace);


// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//  let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

// let str1 = 'Каждый охотник желает знать';
//
// let delete_characters = (str, length) => {
//       return (str1.slice(0, length));
// }
// document.write(delete_characters(str1, 7));

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

let insertDash = (str) => {
    return str.replaceAll(' ', '-').toUpperCase();
}

document.write(insertDash('HTML JavaScript PHP'));

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

let string1 = 'итерируемые объекты — это те объекты, на которых можно выполнить итерацию';

let function2 = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

console.log(function2(string1));


// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

let text = 'Продолжаем, если нет ошибок'

let capitalize = (str) => {
    return str.split(' ').map(value => value.charAt(0).toUpperCase() + value.slice(1)).join();
};

document.write(capitalize(text));