const mobile = {
    brand: 'samsung',
    price: 25000,
    color: 'black',
    camera: '12mp'
}

// for of = array
// for in = object
for (const prop in mobile) {
    console.log(prop); //shows the property, e.g. brand
    console.log(mobile[prop]); //shows the value, e.g. 'samsung'
}


const keys = Object.keys(mobile);
console.log(keys); //[ 'brand', 'price', 'color', 'camera' ]

for (const key of keys) {
    console.log(key); //because key is an array, that's why we used 'of'
}
for (const key of keys) {
    console.log(key, '+', mobile[key]); //brand + samsung    price + 25000     color + black   camera + 12mp
}

