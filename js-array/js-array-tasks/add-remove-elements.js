/* 2. Add or remove elements
Declare an array of 3 tourist destinations
Add a new tourist destination to your tourist array
Add two more to your array
Remove the last tourist destination you have added
display the final array as output
 */

const destinations = ['bali','bandarban', 'maldives'];


// adding one destination
destinations.push('niagra falls');
console.log(destinations); //[ 'bali', 'bandarban', 'maldives', 'niagra falls' ]


// adding two destinations
destinations.push('switzerland', 'rangamati');
console.log(destinations); /*[
    'bali',
    'bandarban',
    'maldives',
    'niagra falls',
    'switzerland',
    'rangamati'
  ] */

//   removing the last destination and displaying final output
destinations.pop();
console.log(destinations); //[ 'bali', 'bandarban', 'maldives', 'niagra falls', 'switzerland' ]


