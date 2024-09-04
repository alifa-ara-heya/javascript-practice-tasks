// accessing keys

const computer = {
    brand: "lenovo",
    price: 233998,
    hdd: '512gb'
}

const keys = Object.keys(computer);
console.log(keys); //[ 'brand', 'price', 'hdd' ]

// accessing values

const values = Object.values(computer);
console.log(values); //[ 'lenovo', 233998, '512gb' ]