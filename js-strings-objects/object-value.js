const person = {
    name : 'Shahriar Akbar',
    age: 25,
    profession: "developer",
    salary: 25000,
    isMarried: true,
    'fav places': ['banadarbar', 'kuakata', "cos's Bazar"]
}

// we can change the value
person.salary = 30000;
console.log(person);

person["age"] = 30;
console.log(person);
person['fav places'] = ['dhaka', 'ctg', 'comilla']
console.log(person);
console.log(person['fav places']); //[ 'dhaka', 'ctg', 'comilla' ]

const keyName = "profession";
console.log(person[keyName]); //developer

const propName = 'profession';
person[propName] = 'devops';
console.log(person[propName]);

console.log(person['profession']); //devops
