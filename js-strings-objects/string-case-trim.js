const school = "Raj UK Uttara Model High School";
console.log(school); //Raj UK Uttara Model High School

const subject = "Chemistry";
const book = "chemistry";

if (subject === book ) {
    console.log("urai felbo");
}
else {
    console.log("parbo na"); //parbo na, because variables and values are case-sensitive
}

// but,
if (subject.toLowerCase() === book.toLowerCase() ) {
    console.log("urai felbo"); //urai felbo
}
else {
    console.log("parbo na"); 
}

console.log(subject.toLowerCase()); //chemistry

const drink = "water";
const liquid = "  water";
console.log(drink === liquid); //false
console.log(drink == liquid); //false
console.log(drink.trim() === liquid.trim()); //true