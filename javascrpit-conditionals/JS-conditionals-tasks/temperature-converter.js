/* Write a program that converts temperatures between Celsius and Fahrenheit.
The program should take the temperature and the unit (Celsius or Fahrenheit) as input and output the converted temperature.
Use the following formulas:
Celsius to Fahrenheit: (C * 9/5) + 32
Fahrenheit to Celsius: (F - 32) * 5/9 */

function convert_temperature(temp, unit) {
    unit = unit.toLowerCase()
    let convertedTemp;
    if (unit == "c") {
        convertedTemp = ((temp * 9 / 5) + 32).toFixed(2);
        console.log(`${temp}°${unit.toUpperCase()} is ${convertedTemp}℉.`);
    }
    else if (unit == "f") {
        convertedTemp = ((temp - 32) * 5 / 9).toFixed(2);
        console.log(`${temp}°${unit.toUpperCase()} is ${convertedTemp}℃.`);
    }
    else{
        console.log("Invalid unit provided!");
    }
}

convert_temperature(22, "C") //22°C is 71.60℉.

convert_temperature(75, "F") //75°F is 23.89℃.

convert_temperature(100, "c") //100°C is 212.00℉.

convert_temperature(0, "c") //0°C is 32.00℉.