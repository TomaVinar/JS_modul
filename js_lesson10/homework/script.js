// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

// let btn = document.getElementsByTagName('button');
// console.log(btn);
// for (const btnElement of btn) {
//     btnElement.onclick = function (e) {
//         console.log (e.target.parentNode);
//         e.target.parentNode.style.display = 'none';
//     }
// }


//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// let button = document.getElementById('main_button');
// button.style.marginTop = '40px';
// button.style.background = 'red';
// console.log(button);
//
// button.onclick = function (e) {
//     console.log(e.target);
//     e.target.style.display = 'none';
// }

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// let btn1 = document.getElementById('confirmation');
//
// btn1.onclick = function () {
//     if (document.forms.forma.age.value >= 18 ) {
//         console.log('Ваш вік підходящий');
//     }
//     else {
//         console.log('Вам менше 18');
//     }
// }


// - Создайте меню, которое раскрывается/сворачивается при клике

// const menu = document.getElementById('menu_title')
// const list = document.getElementById('menu-list')
//
// menu.onclick = () => {
//     list.hidden = !list.hidden;
// }

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.


let listComment = [
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
];

//     Вывести список комментариев в документ, каждый в своем блоке.

let commentsContainer = document.createElement('div');

for (const listCommentElement of listComment) {
    let eachCommentDiv = document.createElement('div');
    eachCommentDiv.innerText = `${listCommentElement.title} ${listCommentElement.body}`;
    commentsContainer.appendChild(eachCommentDiv);
}
document.body.appendChild(commentsContainer);

//     Добавьте каждому комментарию по кнопке для сворачивания его body.

let mainContainer = document.createElement('div');

for (const item of listComment ) {
    let comment = document.createElement('div');
    let eachTitleDiv = document.createElement('div');
    let eachBodyDiv = document.createElement('div');
    let button2 = document.createElement('button');

    eachTitleDiv.innerText = `${item.title}`;
    eachBodyDiv.innerText = `${item.body}`;
    button2.innerText = 'close';

    button2.onclick = function () {
        eachBodyDiv.hidden = !eachBodyDiv.hidden;
    }
    comment.append(eachTitleDiv, eachBodyDiv, button2);
    mainContainer.appendChild(comment);
}

document.body.appendChild(mainContainer);
