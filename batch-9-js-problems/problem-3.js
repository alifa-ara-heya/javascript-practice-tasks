/* 
Problem 03 : Virus in my Array
⚠️ Function Name Must be deleteInvalids()

ত োমাকে deleteInvalids() নামে এমন একটা ফাংশন ক্রি য়ে ট করতে হবে যা ইনপুট হি সে বে একটি Array
নে বে । ফাংশন টি আরে কটি Array রি টার্ন করবে যে খানে ভ্যালুগুল ো হবে শুধুনাম্বার । অর্থাৎ Array এর যে সকল
elements নাম্বার না , তাদে র ডি লি ট করে শুধুমাত্র নাম্বার গুল ো কে Array আকারে রি টার্ন করতে হবে ।
তুমি যদি এই ফাংশনে এই [ NaN, 1,12,0 ,-1 , undefined ] Array টি পাস কর ো কর ো তাহলে সে ত োমাকে
রি টার্ন করবে [ 1 , 12 , 0 , -1 ]

Input :
ফাংশন টি ইনপুট নে বে একটি Array । Array এর উপাদান গুল োর Datatype যে ক োন ধরনে র হতে পারে ।

Output :
ফাংশন টি আউটপুট দে বে আরে কটি Array । Array এর উপাদান গুল ো হবে শুধুমাত্র নাম্বার ।

Challenge 📢 : ফাংশন টি তে Array ছাড়া অন্য ক োন ভ্যালুপাস করলে সে টা একটা error message
রি টার্ন করবে ।
*/
// console.log(typeof(NaN) === "number"); //true

function deleteInvalids(arr) {
    const numbers = [];
    if (!Array.isArray(arr)) {
        return "Please enter an array."
    }
    for (const item of arr) {
        if (typeof item === "number" && !isNaN(item)) {
            numbers.push(item);
        }
    }
    return numbers;
}


// Test Cases
const array1 = [NaN, 1, 12, 0, -1, undefined];
console.log(deleteInvalids(array1)); //[ 1, 12, 0, -1 ]

const array2 = ["1", { num: 2 }, NaN]
console.log(deleteInvalids(array2)); //[]

const array3 = [1, 2, -3]
console.log(deleteInvalids(array3)); //[ 1 , 2 , -3 ]

const array4 = { num: [1, 2, 3] };
console.log(deleteInvalids(array4));