/* Problem-01: Help The Zoo Manager
⚠️ Function Name Must be calculateMoney()

বাকের ভাই মিরপুর চিড়িয়াখানার ম্যানেজার। প্রতিদিন তাকে অসংখ্য টিকেট বিক্রি করতে হয়। টাকার হিসেব 
তিনি সবসময় গড়মিল বাধিয়ে ফেলেন। তুমি যেহেতু সদ্য ডেভেলপার হচ্ছো, বাকের ভাই তোমার কাছে একটি 
হেল্প চেয়েছে। বাকের ভাইকে calculateMoney() নামে একটি ফাংশন বানিয়ে দিতে হবে, যাকে প্রতিদিন 
টিকেট সেল করার সংখ্যা ইনপুট দিলে সে সকল খরচ বাদ দিয়ে মোট কত টাকা বাকের ভাইর কাছে থাকে তা বলে 
দিতে পারে।

চিড়িয়াখানায় প্রতি টিকেট বিক্রি হয় ১২০ টাকায়। আর ব্যয়ের মধ্যে প্রতিদিন ১ জন দারোয়ানকে দিতে হয় ৫০০ 
টাকা এবং ৮ জন স্টাফকে লাঞ্চ করানোর জন্য খরচ হয় জনপ্রতি ৫০ টাকা করে।

Input:
ফাংশনটি ইনপুট নেবে টিকেট সেল করার সংখ্যা। ইনপুট হবে একটি পজিটিভ সংখ্যা। (0<=Input)

Output:
টিকেটের আয় ও ব্যয়গুলো ক্যালকুলেট করে বাকী কত টাকা বাকের ভাইর কাছে থাকলো সেটা তোমার 
ফাংশন আউটপুট হিসেবে রিটার্ন করবে। আউটপুট পজিটিভ, নেগেটিভ যেকোন কিছুই হতে পারে।
💡 যেমন ইনপুট যদি 10 হয় তাহলে আউটপুট হবে (10 * 120) - (500 + (8 * 50)) = 300

Challenge 📢: বাকের ভাই যদি ইনপুট হিসেবে নেগেটিভ সংখ্যা দেয় তাহলে তোমাকে একটা error মেসেজ 
আউটপুট হিসেবে রিটার্ন করে দিতে হবে।

SAMPLE INPUT       SAMPLE OUTPUT
10                300
1055              125700
93                10260
-130              Invalid Number (string)

(you can give your own string error message)

/*function signature/sample */
// function calculateMoney(ticketSale) {
    // You have to write your code here


function calculateMoney(ticketSale) {
    const perTicketPrice = 120;
    const guardSalary = 500;
    const perStaffLunch = 50;
    const staffMember = 8;
    const returnMoney = (ticketSale * perTicketPrice) - (guardSalary + staffMember * perStaffLunch)
    if (ticketSale < 0) {
        return "Ticket number cannot be negative."
    }
    else {
        return returnMoney;
    }
}


// // Test Cases
const numberOfTickets = -130;
console.log(calculateMoney(numberOfTickets));


