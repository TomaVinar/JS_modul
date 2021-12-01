// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює колір тексту елемeнту з ід main_header на назву групи в якій ви вчитесь (mon-year)

let header = document.getElementById('main_header');
header.innerText = 'frontend sept-2021';
header.style.color = 'red';

// b) робить ширину елементу ul 400px

let b = document.getElementsByTagName('ul');
for (const bElement of b){
    bElement.style.width = '400px';
    console.log(bElement);
}

// c) робить шириниу всіх елементів з класом linkList шириною 50%

let link = document.getElementsByClassName('linkList');
for ( const linkElement of link) {
    linkElement.style.width = '50%';
    console.log(linkElement);
}

// d) отримує текст який зберігається в елементі з класом listElement2

let text = document.getElementsByClassName('listElement2');
for ( const textElement of text) {
    console.log(textElement);
}

// e) отримує всі елементи li та змінює ім колір фону на сірий

let items = document.getElementsByTagName('li');
for ( const item of items) {
    item.style.background = 'grey';
    console.log(item);
}

// f) отримує всі елементи 'a' та додає їм клас anchor

let d = document.getElementsByTagName('a');
for ( const dElement of d ) {
    dElement.classList.add('anchor');
    console.log(dElement);
}

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

let linkItems = document.getElementsByTagName('a');
for (const item of linkItems) {
    if (item.innerText.includes('link3')) {
        item.style.width = '40px';
        item.style.background = 'red';
    }
}

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

let linkA = document.getElementsByTagName('a');
for ( const linkAElement of linkA) {
    linkAElement.classList.add(`element_${linkAElement.innerText}`);
}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// let subHeader = document.getElementsByClassName('sub-header');
// let bgColor = prompt('take a background for elements');
// function changBg () {
//     for ( let subElement of subHeader) {
//         subElement.style.background = bgColor;
//     }
// }
//
// changBg();

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

// let sub2 = document.getElementsByClassName('sub-header');
// let newFont = prompt('take a font color');
// function chgFontColor () {
//     for ( const sub2Element of sub2 ) {
//         sub2Element.style.color = newFont;
//     }
// }
//
// chgFontColor();

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// let content = document.getElementsByClassName('content_1');
// let text1 = prompt('enter new text');
// function newFont () {
//     for (const contentElement of content) {
//         contentElement.innerText = text1;
//     }
// }
//
// newFont();

// l) отримати елементи p та змінити їм padding на 20px

let pElements = document.getElementsByTagName('p');
for ( const pElement of pElements ) {
    pElement.style.padding = '20px';
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

let text21 = document.getElementsByClassName('text2');
for ( const textElement of text21 ) {
    textElement.classList.toggle('text2');
    textElement.classList.add('nov-2021');
    console.log(textElement);
}
