/* 
Write a JavaScript function called maskPhoneNumber that takes a phone number as a string and returns a masked version of it.

Requirements:

- The function should first extract only the digits from the input string, ignoring any other characters like dashes (-), parentheses (()), or spaces.
- If the resulting number of digits is less than 4, the function should return an "Invalid input" message.
- For valid numbers, the function should mask all digits except for the last four.
- Each masked digit should be replaced with an asterisk (*).
- The function should return the masked phone number as a string.
Examples:

maskPhoneNumber("123-456-7890") should return ******7890
maskPhoneNumber("(880) 171 122 3344") should return *******3344
maskPhoneNumber("123") should return "Invalid input"
*/

const maskPhoneNumber = phone => {
    const digits = []
    // let maskedNumbers;
    for (let i = 0; i < phone.length; i++) {
        let digitInNumber = parseInt(phone[i])
        if (!isNaN(digitInNumber)) {
            digits.push(parseInt(phone[i]))
            // maskedNumbers = phone[i].replace('*')
        }
        // return phone
    }
    const allDigits = digits.join('')
    // return maskedNumbers

    if (allDigits.length < 4) {
        return "Invalid input"
    }
    else {
        const maskedPhoneNumber = []
        for (let i = 0; i < allDigits.length - 4; i++) {
            const maskedDigit = allDigits[i].replace(allDigits[i], '*')
            maskedPhoneNumber.push(maskedDigit)
        }
        const lastFourChars = allDigits.slice(-4)
        // console.log({ lastFourChars });
        return `${maskedPhoneNumber.join('')}${lastFourChars}`
    }

}


// console.log(maskPhoneNumber("123-456-7890"));
// console.log(maskPhoneNumber("(880) 171 122 3344"));
// console.log(maskPhoneNumber("123"));

// if (typeof phone !== 'string') {
//     return "Invalid input"
// }
// else if (phone.length < 4) {
//     return "Invalid input"
// }
// console.log(NaN !== NaN); //true
// console.log(NaN === NaN); //false

const optimizedMaskPhoneNumber = (phone) => {
    const digits = phone.replace(/\D/g, '')
    console.log({ digits });

    if (digits.length < 4) {
        return "Invalid input"
    }

    const lastFourChars = digits.slice(-4)

    const maskedCharacters = '*'.repeat(digits.length - 4)

    return maskedCharacters + lastFourChars

}

console.log(optimizedMaskPhoneNumber("123-456-7890"));
console.log(optimizedMaskPhoneNumber("123"));
