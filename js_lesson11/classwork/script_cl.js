// є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.

for (let user of users) {
    console.log(user);
    let mainContainer = document.createElement('div');
    let userDiv = document.createElement('div')
    let userName = document.createElement('div');
    let userAge = document.createElement('h6');
    let userStatus = document.createElement('p')
    let button = document.createElement('button');

    userName.innerText = user.name;
    userAge.innerText = user.age;
    userStatus.innerText = user.status;
    button.innerText = 'ADD';
    button.style.width = '120px';
    button.style.height = '32px';
    button.style.marginBottom = '30px';
    userDiv.append(userName, userAge, userStatus);
    mainContainer.append(userDiv, button);
    document.body.appendChild(mainContainer);
    button.addEventListener('click', function (e) {
e.stopPropagation()
        let data = localStorage.getItem('array');
        if (data) {
            const arr = JSON.parse(data)
            localStorage.setItem('array', JSON.stringify([...arr, user]));
            document.body.addEventListener('click', () => {
                location.href = 'favorites.html';
                document.write(data);
            })
        } else {
            localStorage.setItem('array', JSON.stringify([user]));
        }
    })
}

