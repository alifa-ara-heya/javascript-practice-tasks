// find the cheapest mobile here.

const phones = [
    {name: 'Samsung', price: 20000, camera: '12MP', color: 'black'},
    {name: 'Xiaomi', price: 30000, camera: '12MP', color: 'black'},
    {name: 'Oppo', price: 21000, camera: '12MP', color: 'black'},
    {name: 'Iphone', price: 10000, camera: '12MP', color: 'black'},
    {name: 'Walton', price: 10000, camera: '12MP', color: 'black'},
    {name: 'HTC', price: 5000, camera: '12MP', color: 'black'},
]

function getCheapestPhone(phones){
    let min = phones[0];
    for (const phone of phones){
        if (phone.price < min.price){
            min = phone;
        }
    }
    return min;
}

const cheap = getCheapestPhone(phones);
console.log('Cheapest phone is', cheap);

// now let's find the most expensive phone.

function getExpensivePhone(phones){
    let max = phones[0];
    for (const phone of phones) {
        if (phone.price > max.price ){
            max = phone;
        }
    }
    return max;
}

const expensive = getExpensivePhone(phones);
console.log('The most expensive phone is', expensive);