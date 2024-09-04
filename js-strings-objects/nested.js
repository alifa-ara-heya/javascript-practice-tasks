const college = {
    name: 'vnc',
    classes: ['11', '12'],
    events: ['science fair', 'bijoy dibosh', '21 Feb'],
    unique: {
        color: 'blue',
        result: {
            gpa: 5,
            merit: 'top'
        }
    }
}

console.log(college.unique); //{ color: 'blue' }
console.log(college.unique.color); //blue

console.log(college.unique.result.gpa); //5

// changing the value of merit

college.unique.result.merit = "not top";
console.log(college.unique.result.merit); //not top


// changing the value of an array inside of an object
college.events[1] = "milad";
console.log(college.events); //[ 'science fair', 'milad', '21 Feb' ]

// delete
delete college.classes;
console.log(college);