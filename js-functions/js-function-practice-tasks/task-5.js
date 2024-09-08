//Task-5 
//Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return `Even`. If odd return `Odd`

function odd_even(int){
    if (int % 2 === 0) {
        const result = "Even";
        return result;
    } else {
        const result = "Odd";
        return result;
    }
}

console.log(odd_even(12)); //Even
console.log(odd_even(5)); //Odd