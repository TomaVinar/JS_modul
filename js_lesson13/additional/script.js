// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)


let name = document.getElementById('name');
let amount = document.getElementById('amount');
let price = document.getElementById('price');
let img = document.getElementById('image');
let button = document.getElementsByTagName('button')[0];


button.addEventListener('click', (e) => {
    e.preventDefault()
    const product = {
        id: new Date().getTime(),
        name: name.value,
        amount: amount.value,
        price: price.value,
        img: img.value
    }

    let data = localStorage.getItem('product');
    if (data) {
        const arr = JSON.parse(data)
        localStorage.setItem('product', JSON.stringify([...arr, product]));
    } else {
        localStorage.setItem('product', JSON.stringify([product]));
    }
})


// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар