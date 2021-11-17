// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.

let massive = [];
for (let i = 2, j = 0; i <= 100; i += 2, j++) {
    massive[j] = i;
}
console.log(massive);

//     b. заповнити його 50 непарними числами за допомоги циклу.

let array = [];
for (let i = 1, j = 0; i <= 100; i += 2, j++) {
    array[j] = i;
}
console.log(array);


//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

let arr = [];
for (let i = 0; i < 20; i++) {
    let arr = 0;
    let loopEnd = Math.floor(Math.random() * 100 + 1);
    for (let j = 0; j < loopEnd; j++) {
        arr++;
    }
    console.log(arr);
}
