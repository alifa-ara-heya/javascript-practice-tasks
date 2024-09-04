// one way
const person = {
    name : 'Shahriar Akbar',
    age: 25,
    profession: "developer",
    salary: 25000,
    isMarried: true,
    'fav places': ['banadarbar', 'kuakata', "cos's Bazar"]
}

// second way
const pencil = new Object();
console.log(pencil); //{}

const rubber = Object.create({})
console.log(rubber); //{}


// using new, pore shikhbo