const mobile = {
    brand: 'samsung',
    price: 25000,
    color: 'black',
    camera: '12mp'
}

// for of = array
// for in = object
for (const prop in mobile) {
    console.log(prop);
    console.log(mobile[prop]);
}


const keys = Object.keys(mobile);
console.log(keys); //[ 'brand', 'price', 'color', 'camera' ]

for (const key of keys) {
    console.log(key); //because key is an array, that's why we used 'of'
}
for (const key of keys) {
    console.log(key, '+', mobile[key]); 
}

