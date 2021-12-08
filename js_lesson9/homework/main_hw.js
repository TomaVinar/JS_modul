// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

// let divElement = document.createElement('div');
// divElement.classList.add('wrap', 'collapse', 'alpha', 'beta');
// divElement.innerText = 'Lorem ipsum';
// divElement.style.background = 'red';
// divElement.style.color = 'white';
// divElement.style.fontSize = '24px';
// let divClone = divElement.cloneNode(true);
//
// document.body.append(divElement, divClone);

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

let items = ['Main','Products','About us','Contacts'];

for (const item of items) {
    let itemEl = document.createElement('li');
    itemEl.innerText = `${item}`;
    document.body.appendChild(itemEl);

}


// - Є масив

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

for (const coursItem of coursesAndDurationArray) {
    let itemDiv = document.createElement('div');
    itemDiv.classList.add('item');
    let h2 = document.createElement('h2')
    h2.innerText = coursItem.title;
    let monthDurationDiv = document.createElement('div')
    monthDurationDiv.innerText = coursItem.monthDuration;
    itemDiv.append(h2, monthDurationDiv);
    document.body.appendChild(itemDiv);
}


// - Є масив

// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

let coursesAndDurationArray1 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const coursesAndDurationArray1Element of coursesAndDurationArray1) {
    let coursesItem = document.createElement('div');
    coursesItem.classList.add('item');
    let h1 = document.createElement('h1');
    h1.classList.add('heading');
    h1 = coursesAndDurationArray1Element.title;

    let pElement = document.createElement('p');
    pElement.classList.add('description');
    pElement = coursesAndDurationArray1Element.monthDuration;

    coursesItem.append(h1);
    coursesItem.append(pElement);
   document.body.appendChild(coursesItem);
}

