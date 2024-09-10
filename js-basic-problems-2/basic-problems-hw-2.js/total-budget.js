/* Task-3:
Your task is to calculate the total budget required to buy electronics:

    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk
Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required. */

function calculateElectronicsBudget(numOfLaptop, numOfTablets, numOfMobiles){
    const priceOfLaptops = 35000 * numOfLaptop;
    const priceOfTablets = 15000 * numOfTablets;
    const priceOfMobiles = 20000 * numOfMobiles;

    const totalMoney = priceOfLaptops + priceOfTablets + priceOfMobiles;
    return totalMoney;
}

console.log(calculateElectronicsBudget(1,2,3));