const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 22 },
];

const getAges = (arr) => arr.map((person) => person.age);

// console.log(getAges(people));

const getEligibleVoters = (arr) => arr.filter((person) => person.age >= 25);

// console.log(getEligibleVoters(people));

const sumEligibleAges = (arr) => {
  const eligibleAges = arr.filter((person) => person.age >= 25);
  //   console.log(eligibleAges);
  const sumOfAges = eligibleAges.reduce((acc, curr) => acc + curr.age, 0);
  return sumOfAges;
};

console.log(sumEligibleAges(people));
