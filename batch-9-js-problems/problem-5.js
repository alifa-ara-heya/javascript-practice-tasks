/*
Problem 05 : Monthly Savings of a Freelancer
⚠️ Function Name Must be monthlySavings()

ফ্রি ল্যান্সার শাহে দ প্রতি মাসে বে শ কি ছুপে মে ন্ট ক্লায়ে ন্ট দে র থে কে পায় । কি ন্তু পে মে ন্ট এর কি ছুট্যাক্স পরি শ োধ
এবং নি জে র লি ভি ং কস্ট এর কারনে সে সে ভি ংস করতে পারে না । তার সে ভি ংস এর হি সে ব করার জন্যে তাকে
monthlySavings() নামে একটি ফাংশন তৈ রী করে দি তে যে টা ইনপুট হি সে বে নে বে একটি Array (প্রতি মাসে
পাওয়া সকল পে মে ন্ট ) এবং একটি Number ( শাহে দে র লি ভি ং কস্ট ) ।
শাহে দে র যে সকল পে মে ন্ট 3000 টাকা বা তার বে শি সে সকল পে মে ন্ট থে কে ব্যাংক Tax হি সে বে ২০% টাকা কে টে
নে য় । এখন ম োট ইনকাম থে কে Tax গুল ো বাদ দি য়ে এবং Living cost বাদ দি য়ে বাকী যে টাকা থাকে সে টা ই
হল ো শাহে দে র সে ভি ংস । অর্থাৎ ফাংশন টি শাহে দে র সে ভি ংস কে রি টার্ন করবে । যদি সে ভি ংস করার মত ো টাকা না
থাকে অর্থাৎ সে ভি ংস এর ভ্যালুযদি ০ এর চে য়ে কম হয় তাহলে ফাংশন টি রি টার্ন করবে একটি স্ট্রি ং তাহল ো “earn
more” ।

Input :
ফাংশন টি ইনপুট নে বে একটি Array (All payments) এবং একটি number (Living cost) ।

Output :
ফাংশন টি একটি number অথবা string রি টার্ন করবে ।
● যদি savings 0 বা তার থে কে বে শি হয় তাহলে রি টার্ন করবে একটা number ( Total Savings )
● যদি savings 0 থে কে ছ োট হয় তাহলে রি টার্ন করবে String যার ভ্যালুহবে earn more

Challenge 📢 : ফাংশন টি তখন invalid input কে string টি রি টার্ন করবে ।
● যদি প্রথম প্যারামি টার টি Array না হয়
● যদি ও 2য় প্যারামি টার টি নাম্বার না হয় 
 */

function monthlySavings(payments, livingCost) {
    if (!Array.isArray(payments) || typeof (livingCost) !== "number") {
        return "Invalid Input";
    }

    let totalIncome = 0;
    for (let payment of payments) {

        if (payment >= 3000) {
            payment = payment - payment * 0.2;
        }

        totalIncome = totalIncome + payment;

    }

    const savings = totalIncome - livingCost;
    if (savings < 0) {
        return "Earn More";
    } else {
        return savings;
    }

}

// Test Cases
const shahed1 = monthlySavings([1000, 2000, 3000], 5400);
console.log(shahed1); //0

const shahed2 = monthlySavings([1000, 2000, 2500], 5000);
console.log(shahed2); //500

const shahed3 = monthlySavings([900, 2700, 3400], 10000);
console.log(shahed3); //Earn More

const shahed4 = monthlySavings(100, [900, 2700, 3400]);
console.log(shahed4); //Invalid Input
