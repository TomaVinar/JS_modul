// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"

let id = document.getElementById('content');
console.log(id);

// -- отримує текст з блоку з id "rules"

let idRules = document.getElementById('rules');
console.log(idRules);

// -- замініть текст параграфа з id 'content' на будь-який інший

let content = document.getElementById('content');
content.innerText = 'Рекурсия – это приём программирования, полезный в ситуациях, когда задача может быть естественно разделена на несколько аналогичных, но более простых задач. Или когда задача может быть упрощена до несложных действий плюс простой вариант той же задачи. ' +
    'Или, как мы скоро увидим, для работы с определёнными структурами данных.';
console.log(content);

// -- замініть текст параграфа з id 'rules' на будь-який інший

let rulesId = document.getElementById('rules');
rulesId.innerText = 'Отсортированный массив. Важно, что копия массива не создаётся - массив сортируется на месте.';
console.log(rulesId);

// -- змініть кожному елементу колір фону на червоний

let children = document.children;
for (const item of children ) {
    item.style.background = 'green';
}

// -- змініть кожному елементу колір тексту на синій
let ch = document.children;
for ( const chElement of ch ) {
    chElement.style.color = 'gold';
}

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log

let item = document.getElementById('rules');
console.log(item.classList);
console.log(item.classList.value);

// -- поміняти колір тексту у всіх елементів fc_rules на червоний

let rules = document.getElementsByClassName('fc_rules');
for (const item of rules ) {
    item.style.color = 'red';
}
