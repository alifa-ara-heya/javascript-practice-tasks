const person = {
    name : 'Shahriar Akbar',
    age: 25,
    profession: "developer",
    salary: 25000,
    isMarried: true,
    'fav places': ['banadarbar', 'kuakata', "cos's Bazar"]
}

// dot notation
console.log(person);
console.log(person.isMarried); //true;
console.log(person.profession); //developer;
const salary = person.salary
console.log(salary); //25000
// console.log(person."fav places"); //we can not access this property using dot notion

// bracket notation - accessing the value of the property with bracket;
console.log(person["age"]); //25
const boyosh = person["age"];
console.log(boyosh); //25

console.log(person["fav places"]); //[ 'banadarbar', 'kuakata', "cos's Bazar" ]