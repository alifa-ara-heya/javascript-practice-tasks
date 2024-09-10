// number validation
function multiply(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return "Please provide a number"
    }
    
    else{
        const mult = num1 * num2;
        return mult;
    }
}

const result = multiply(5, 2);
console.log(result);


// string validation
function fullName(first, second){
    if(typeof first !== "string" || typeof second !== "string"){
        return "Please provide a string."
    }
    const full = first + " " + second;
    return full;
}

const name = fullName('akmal');
console.log(name);


// object validation
function getPrice(product){
    const price = product.price;

    if (typeof product !== "object"){
        return "please provide an object"
    }
    else{
        return price;
    }
}

const price = getPrice({name: "Samsung", price: 2000});
const price2 = getPrice(2) //2000
console.log(price2); //please provide an object


// array validation
function getSecond(numbers){
    if(!Array.isArray(numbers)){
        return "please provide an array"
    }
    const second = numbers[1];
    return second;
}

const numbers = [1, 3, 4];
const notAnArray = 3;
console.log(getSecond(numbers)); //3
console.log(getSecond(notAnArray)); //please provide an array