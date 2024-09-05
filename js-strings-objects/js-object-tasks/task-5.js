// Loop through an object and print the key-value pairs with their types

// Input:

let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};

// key: name | type:  string
// key: age | type:  number
// key: city | type:  string
// key: isStudent | type:  boolean


for (let key in myObject) {
    console.log(`key: ${key} | type: ${typeof(myObject[key])}`); //shows the desired result
}

// accessing keys in an object
const keys = Object.keys(myObject);
console.log(keys);  //[ 'name', 'age', 'city', 'isStudent' ]