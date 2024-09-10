const products = [
    {name: 'shampoo', price: 2000},
    {name: 'chiruni', price: 200},
    {name: 'shirt', price: 1000},
    {name: 'pant', price: 3000},
]

function getTotal(products){
    let total = 0;
    for (const product of products){
        total = product.price + total;
    }
    return total;
}

const total = getTotal(products);
console.log('total cost', total);