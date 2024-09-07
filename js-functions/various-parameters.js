// a function for a given string to tell me whether it has even number of characters

function evenSizedStr(str){
    const size = str.length;
    console.log(str, size);

    if (size % 2 === 0){
        console.log('even sized');
        return true;
    } else{
        console.log('odd sized');
        return false;
    }
}

evenSizedStr('Dhaka'); //5
evenSizedStr('Faka') //4


function doubleOrTriple(number, doDouble){
    if(doDouble === true) {
        const result = number * 2;
        return result;
    } else {
        const result = number * 3;
        return result;
    }
}

console.log(doubleOrTriple(2, true));
console.log(doubleOrTriple(3, false));


function numberOfElemenst(numbers){
    const len = numbers.length;
    return len;
}

numberOfElemenst([12, 20, 3, 8, 10, 3, 10])


function getAge(person){
    const age = person.age;
    return age;
}

console.log(getAge('sakib'));