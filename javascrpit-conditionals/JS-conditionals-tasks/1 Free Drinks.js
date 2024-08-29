/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

let burgerPrice = 300;
let coke;

if (burgerPrice > 500) {
    coke = 0;
    console.log("free coke");
}
else {
    coke = 30;
    console.log(`You will have to pay ${coke} taka`);
}