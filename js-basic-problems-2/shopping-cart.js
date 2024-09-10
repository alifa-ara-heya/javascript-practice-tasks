const products = [
    {name: 'shampoo', price: 2000, quantity: 5},
    {name: 'chiruni', price: 200, quantity: 4},
    {name: 'shirt', price: 1000, quantity: 2},
    {name: 'pant', price: 3000, quantity: 1},
]

function getTotal(products){
    let total = 0;
    for (const product of products){
        total = product.price*product.quantity + total;
    }
    return total;
}

const total = getTotal(products);
console.log('total cost', total);