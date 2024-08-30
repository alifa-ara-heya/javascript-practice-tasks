/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

let burgerPrice = 300;
let cokePrice;

if (burgerPrice > 500) {
    cokePrice = 0;
    console.log("free coke");
}
else {
    cokePrice = 30;
    console.log(`You will have to pay ${cokePrice} taka`);
}