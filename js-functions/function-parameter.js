// function declaring

function vaatkhao() {
    console.log('hat dho');
    console.log("khabar nao");
}

// function calling
vaatkhao();


// squre function

function square(number) {
    console.log("Value of the number parameter", number);
    const borgo = number * number;
    console.log("Square of the given number is", borgo);
}

square(4);


// sum function

function add(num1, num2, num3) {
    const sum = num1 + num2 + num3;
    console.log(sum);
}

add(2, 4, 7); //13
add(1, 3); //Nan, because the third parameter is undefined.