// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.


let btn = document.getElementById('btn');

btn.onclick = function () {
    console.log(document.forms.form1.name.value);
    console.log(document.forms.form1.password.value);
    console.log(document.forms.form2.username.value);
    console.log(document.forms.form2.search.value);
}

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

let inputRows = document.createElement('input');
let inputCells = document.createElement('input');
let inputContext = document.createElement('input');
let button = document.createElement('button');
button.innerText = 'Create table';
document.body.append(inputRows, inputCells, inputContext, button);

button.onclick = function () {
    let trNumber = inputRows.value;
    let tdNumber = inputCells.value;
    let context = inputContext.value;
        function createTable (rows, cells, text) {
            let table = document.createElement('table');
            let tableContainer = document.createElement('div');
            tableContainer.style.background = 'green';
            tableContainer.appendChild(table);
            document.body.appendChild(tableContainer);
                for (let i = 0; i < trNumber; i++) {
                    let tr = document.createElement('tr');
                    tr.style.background = 'green';
                    for (let j = 0; j < tdNumber; j++) {
                    let td = document.createElement('td');
                    td.innerText = `${text}`;
                    table.appendChild(tr);
                    tr.appendChild(td);
                }
            }
        }
        createTable(trNumber, tdNumber, context);
}

// (Додаткова частина для завдання)
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку


let massive = ['fuck', 'bitch', 'sucks', 'arsehole', 'bollocks', 'bullshit ', 'shit'];

let container = document.createElement('div');
container.style.marginTop = '40px';
let input1 = document.createElement('input');
let btn1 = document.createElement('button');
btn1.style.background = 'blue';
btn1.style.width = '80px';
btn1.style.height = '32px';
btn1.innerText = 'Check';
btn1.style.color = 'white';
btn1.style.marginLeft = '20px';
container.append(input1, btn1);
document.body.appendChild(container);

btn1.onclick = function () {
    for (const word of massive) {
        if ( input1.value === word) {
            alert('Первое китайское предупреждение');
        } else {
            console.log ('Вы прошли проверку. Поздравляем!');
        }
    }
}

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

let massive2 = ['fuck', 'bitch', 'sucks', 'arsehole', 'bollocks', 'bullshit ', 'shit'];

let checkContainer = document.createElement('div');
checkContainer.style.marginTop = '40px';
let inputCheck = document.createElement('input');
let buttonMain = document.createElement('button');
buttonMain.innerText = 'Проверка';
checkContainer.append(inputCheck, buttonMain);
document.body.appendChild(checkContainer);

buttonMain.onclick = function () {
    for (const item of massive2) {
        if (inputCheck.value.includes(item)) {
            alert('WTF');
        }
        else {
            console.log("Все чисто");
        }
    }
}