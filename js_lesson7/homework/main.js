// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
let array = [];

function User (id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let user1 = new User(1, 'kola', 'ivanov', '13234@gmail.com', '80961234567');
let user2 = new User(2, 'kola', 'petrov', '13234@gmail.com', '80961234567');
let user3 = new User(3, 'olya', 'petrova', '13234@gmail.com', '80961234567');
let user4 = new User(4, 'sima', 'petrov', '13234@gmail.com', '80961234567');
let user5 = new User(5, 'pasha', 'petrov', '13234@gmail.com', '80961234567');
let user6 = new User(6, 'sasha', 'petrov', '13234@gmail.com', '80961234567');
let user7 = new User(7, 'vasya', 'petrov', '13234@gmail.com', '80961234567');
let user8 = new User(8, 'stepan', 'petrov', '13234@gmail.com', '80961234567');
let user9 = new User(9, 'ivan', 'petrov', '13234@gmail.com', '80961234567');
let user10 = new User(10, 'dima', 'petrov', '13234@gmail.com', '80961234567');

array.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);
console.log(array);

//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filter = (massive) => {
    return massive.filter(value => value.id%2 === 0);
}

console.log(filter(array));


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sort = (mas) => {
    return mas.sort((a, b) => a.id - b.id);
}

console.log(sort(array));


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let client = new Client(345, 'vasya', 'ivanov', 'asff@gmail.com', '80957446644', [ {phone: 1}, {radio: 2}, {watch: 3}, {tv: 1}]);
console.log(client);


// створити пустий масив, наповнити його 10 об'єктами Client

clients = [];

clients[0] = new Client(345, 'vasya', 'ivanov', 'asff@gmail.com', '80957446644', [ {phone: 1}, {radio: 2}, {watch: 3}, {tv: 1}]);
clients[1] = new Client(346, 'vasya', 'ivanov', 'asff@gmail.com', '80957446644', [ {phone: 1}]);
clients[2] = new Client(347, 'vasya', 'ivanov', 'asff@gmail.com', '80957446644', [ {phone: 1}, {radio: 2}]);
clients[3] = new Client(348, 'vasya', 'ivanov', 'asff@gmail.com', '80957446644', [ {phone: 1}, {radio: 2}, {watch: 3}]);
clients[4] = new Client(349, 'vasya', 'ivanov', 'asff@gmail.com', '80957446644', [ {phone: 1}, {radio: 2}, {watch: 3}, {tv: 1}, {tech: 1}]);
clients[5] = new Client(350, 'vasya', 'ivanov', 'asff@gmail.com', '80957446644', [ {phone: 1}, {radio: 2}, {watch: 3}, {tv: 1}, {tech: 1}]);
clients[6] = new Client(351, 'vasya', 'ivanov', 'asff@gmail.com', '80957446644', [ {phone: 1}, {radio: 2}]);
clients[7] = new Client(352, 'vasya', 'ivanov', 'asff@gmail.com', '80957446644', [ {phone: 1}, {radio: 2}, {watch: 3}, {tv: 1}, {tech: 1}]);
clients[8] = new Client(353, 'vasya', 'ivanov', 'asff@gmail.com', '80957446644', [ {phone: 1}]);
clients[9] = new Client(354, 'vasya', 'ivanov', 'asff@gmail.com', '80957446644', [ {phone: 1}, {radio: 2}, {watch: 3}, {tv: 1}]);


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sort2 = (arr) => {
 return arr.sort((a, b) => a.order.length - b.order.length);
}

console.log(sort2(clients));