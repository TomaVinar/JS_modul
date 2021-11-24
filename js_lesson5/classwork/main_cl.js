// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

let fun = ( x, y, z) => {
    if ( x < y && x < z) {
        console.log (x);
    }
    else if ( y < x && y < z) {
        console.log(y);
    }
    else if ( z < y && z < x) {
        console.log(z);
    }
}

fun ( 1, 2, 3);


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

let nums = ( a, b, c) => {
    if ( a > b && a > c) {
        console.log(a);
    }
    else if ( b > a && b > c) {
        console.log(b);
    }
    else if ( c > a && c > b) {
        console.log(c);
    }
}

nums( 5, 6, 10);

// - створити функцію яка повертає найбільше число з масиву

let max = (arr) => {
    let maxNum = arr [0];
    for (let i = 0; i < arr.length; i++) {
        const argument = arr[i];
        if ( argument > maxNum) {
            maxNum = argument;
        }
    }

    console.log(maxNum);
    return maxNum;
}

max ([100, 200, 400, 1000]);

// - створити функцію яка повертає найменьше число з масиву

let min = array => {
    let minNum = array [0];
    for (let i = 0; i < array.length; i++) {
        const arrayElement = array[i];
        if ( arrayElement < minNum) {
            minNum = arrayElement;
        }
    }
    console.log (minNum);
    return minNum;
}

min ([100, 200, 300, 2000]);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let func = (num) => {
    let n = 0;
    for (const nums of num) {
        n = n + nums;
    }
    console.log(n);
    return n;
}

func ([1, 2, 4, 5, 6, 7]);

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

let middle = (array1) => {
    let m = 0;
    for (const array1Element of array1) {
        m = (m + array1Element);
    }
    return m/array1.length;
}

console.log(middle([1, 2, 3, 4, 5]));


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

let math = (...arguments) => {
    let argMin = arguments [0];
    let argMax = arguments [0];
    for (let i = 0; i < arguments.length; i++) {
        const item = arguments[i];
        if (argMin < arguments[i] ) {
            argMax = arguments [i];
        }
        else argMin = arguments [i]
    }
    console.log(argMax, 'argMax');
    console.log( argMin, 'argMin');
    return argMin;
}

math (1,2, 3, 4, 5, 6);

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

let random = () => {
    let v = [];
    for (let i = 0; i < 10; i++) {
        v [v.length] = Math.round (Math.random()*100);
    }
    console.log(v);
}

random([]);

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

let random2 = (limit) => {
    let f = [];
    for (let i = 0; i < 5; i++) {
        f.push(Math.round(Math.random()*limit))
    }
    console.log(f);
}
random2(10, []);

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

let mas = [1, 2, 3, 4, 6, 7, 8];
let reverse = (mas1) => {
    let mas2 = [];
    for (let i = mas.length - 1; i >= 0; i-- ) {
        const m = mas[i];
        mas2.push(m);
    }
    console.log(mas2);
}

reverse();