//  1 ft = 12 in
// a function to convert foot into inch

function inToFt(inch) {
    const foot = inch / 12;
    return foot;
}

const sakibheight = 75;
console.log(inToFt(sakibheight)); //6.25

// But we want to get 6 foot 3 inch where 3 is the remainder if we divide 75 by 12. How can we get that?
function inchToFeet(inch) {
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = feetNumber + ' ft ' + inchRemaining + ' inch.'
    return result;
}

const riyaHeight = 75;
console.log(inchToFeet(riyaHeight)); //6 ft 3 inch.


// mile to kilometer
function mileToKm(mile){
    const kilo = mile * 1.60934;
    const kiloFloat = parseFloat(kilo.toFixed(2));
    return kiloFloat;
}

console.log(mileToKm(2));
