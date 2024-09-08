/* Task-1:
Write a function to convert temperature from Celsius to Fahrenheit. */

// Celsius to Fahrenheit: (C * 9/5) + 32
// Fahrenheit to Celsius: (F - 32) * 5/9

function celciusToFahrenheit(celcius){
    const fahrenheit = (celcius * 9/5) + 32;
    return fahrenheit;
}

const tempInCelcius = 25;
console.log(celciusToFahrenheit(tempInCelcius)); //77