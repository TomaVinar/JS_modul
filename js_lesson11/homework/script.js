// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage

let div = document.createElement('div');
let name = document.createElement('input');
let age = document.createElement('input');
let btn = document.createElement('button');
age.style.margin = '0 20px 0 20px';
btn.innerText = 'Confirm';
btn.style.width = '220px';
btn.style.height = '32px';
btn.style.background = 'blue';
div.append(name, age, btn);
document.body.appendChild(div);

btn.onclick = function () {
    localStorage.setItem('name', JSON.stringify(name.value));
    localStorage.setItem('age', JSON.stringify(age.value));
}


// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

let container = document.createElement('div');
container.style.marginTop = '20px';
let model = document.createElement('input');
let type = document.createElement('input');
let volume = document.createElement('input');
let button = document.createElement('button');
model.style.marginRight = '20px';
type.style.marginRight = '20px';
volume.style.marginRight = '20px';
button.innerText = 'SEND';
button.style.width = '160px';
button.style.height = '32px';

container.append(model, type, volume, button);
document.body.appendChild(container);

button.onclick = function () {
    let autoArray = [];
    autoArray.push(model.value, type.value, volume.value);
    console.log(autoArray);
    localStorage.setItem('massive', JSON.stringify(autoArray));
}
