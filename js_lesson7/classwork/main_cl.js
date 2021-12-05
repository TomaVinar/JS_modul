// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car (model, manufacturer, year, maxSpeed, engineVolume, driverName, driverSurname, driverLicense) {
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineVolume = engineVolume;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//     this.info = function () {
//         console.log(this);
//         return this.model + '' + this.manufacturer + '' + this.year + '' + this.maxSpeed + '' + this.engineVolume;
//     }
//     this.driver = {
//         name: driverName,
//         surname: driverSurname,
//         license: driverLicense
//     }
//     this.increaseMaxSpeed = function (newValue) {
//         this.maxSpeed = newValue;
//     }
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     }
// }
//
// let car1 = new Car('RX-5', 'MAZDA', 2014, '220', 2, 'ivan', 'pupkin', 123456);
// console.log(car1);
// car1.drive();
// car1.info();
// car1.increaseMaxSpeed(300);
// car1.changeYear(2020);


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car {
    constructor(model, maker, year, maxSpeed, engine, driver) {
        this.model = model;
        this.maker = maker;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engine = engine;
        this.info = function () {
            console.log(this);
            return this.model + '' + this.maker + '' + this.year + '' + this.maxSpeed + '' + this.engine;
        }
        this.increaseMaxSpeed = function (newValue) {
            this.maxSpeed = newValue;
        }
        this.changeYear = function (newValue) {
            this.year = newValue;
        }
        this.addDriver = function ( name, surname, status) {
            this.name = name;
            this.surname = surname;
            this.status = true;
        }
        this.drive = function () {
            console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
        }
    }
}

let car = new Car ('Yaris', 'Toyota', 2016, 180, 1.4);
console.log(car);
car.drive();
car.info();
car.increaseMaxSpeed(200);
car.changeYear(2004);
car.addDriver ('pasha', 'ivanov', true);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
let array = [];
class Cinderella {
    constructor( name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}

array[0] = new Cinderella ('masha', 20, 35);
array[1] = new Cinderella('sofia', 21, 36);
array[2] = new Cinderella('sofia', 21, 37);
array[3] = new Cinderella('sofia', 21, 38);
array[4] = new Cinderella('sofia', 21, 39);
array[5] = new Cinderella('sofia', 21, 40);
array[6] = new Cinderella('sofia', 21, 34);
array[7] = new Cinderella('sofia', 21, 33);
array[8] = new Cinderella('sofia', 21, 40);
array[9] = new Cinderella('sofia', 21, 41);
console.log(array);


// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Prince {
    constructor(name, age, sizeFound) {
        this.name = name;
        this.age = age;
        this.sizeFound= sizeFound;
    }
}

let prince = new Prince ('Prince',30, 36 );
console.log(prince);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

let para = (cinderella, prince) => {
    for (const arrayElement of array) {
        if (arrayElement.size === prince.sizeFound) {
            console.log(`your princes is ${arrayElement.name}`);
        }
    }
}

para(array,prince);

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

let para1 = array.find((element) => element.size === prince.sizeFound);
console.log(para1);