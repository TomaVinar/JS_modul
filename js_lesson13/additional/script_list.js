let btn = document.createElement('button');
btn.innerText = 'Delete All'
document.body.appendChild(btn);

btn.onclick = (e) => {
    localStorage.removeItem('product');
    location.reload();
}

let array = JSON.parse(localStorage.getItem('product'));

for (const arrayElement of array) {
    let itemDiv = document.createElement('div');
    let title = document.createElement('h5');
    let sum = document.createElement('p');
    sum.style.fontWeight = 'bold';
    let itemPrice = document.createElement('div');
    let itemImage = document.createElement('img');
    let itemBtn = document.createElement('button');
    itemBtn.innerText = 'Delete product';

    title.innerText = `${arrayElement.name}`;
    sum.innerText = `${arrayElement.amount}`;
    itemPrice.innerText = `${arrayElement.price}`;
    itemImage.src = `${arrayElement.image}`;
    itemDiv.append(title, sum, itemPrice, itemImage, itemBtn);
    document.body.appendChild(itemDiv);
    itemBtn.onclick = () => {
       let newArray = array.filter (value => value.id !== arrayElement.id);
        localStorage.setItem('product', JSON.stringify(newArray));
        location.reload();
    }
}
