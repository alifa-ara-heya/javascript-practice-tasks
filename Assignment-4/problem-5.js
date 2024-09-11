/* 
roblem 05:  Predict Avarage Waiting Time 
⚠️ Function Name Must be waitingTime()
ইসরাত একটি চাকরির ইন্টারভিউয়ের জন্য অপেক্ষা করছে। তার সিরিয়াল আসলে তাকে ডাকা হবে।  দেয়ালে একটা স্ক্রিনে যারা যারা ইন্টারভিউ দিয়েছে তাদের লিস্ট এবং  প্রত্যেকের কত মিনিট সময় লেগেছে তা দেখাচ্ছে।  ইসরাত বুঝতে পারছেনা যে তাঁর আসলে আর কতক্ষন সময় লাগবে।  তোমার কাজ হলো ইসরাতের আর কত সময় লাগবে তা ক্যালকুলেশন করে বের করার জন্য waitingTime() নামে একটা ফাংশন তৈরি করা। 
ফাংশন টি ২ টা input নেবে ।  ১ম টি হচ্ছে  একটা number এর Array ।  যাদের ভাইভা হয়ে গেছে তাদের  ইন্টারভিউ টাইম। ২য়  টি হচ্ছে ইসরাতের সিরিয়াল নাম্বার।  ফাংশন টি যাদের ভাইভা হয়ে গেছে তাদের সময়ের একটা এভারেজ বের করবে এবং বর্তমান সিরিয়ালের পর থেকে  ইসরাতের আর কত সময় লাগবে সেটা বের করবে এবং আউটপুট হিসেবে রিটার্ন করবে।  
Input :  ফাংশন টি ২ টি ইনপুট নেবে ,  
একটি হলো Array ( যাদের ভাইভা হয়েছে তাদের সময় )  , অন্যটি হলো  ইসরাতের সিরিয়াল নাম্বার।
Serial Number >  length of array 


Output : 
যাদের ভাইভা হয়েছে তাদের রাউন্ডেড এভারেজ বের করো।  ইসরাতের আগে আর কয়জন বাকী আছে তা বের কর।  এবং এই দুটো জিনিস  দিয়ে ইসরাতের waiting time বের করে সেটাকে return করে দাও।   
Example:  array = [ 3, 5, 7, 11, 6 ]  , serial Number = 10
তাহলে এখানে 5 জনের   এভারেজ ইন্টারভিউ টাইম হলো 6 minute (rounded)
ঈসরাতের সিরিয়াল নাম্বার ১০ এর মানে হলো যে তাঁর আগে আছে 10-1 = 9 জন।  
যেহেতু ৫ জনের হয়ে গেছে সেহেতু ইসরাতের আগে আর ভাইবা বাকী আছে  4 জনের। এবার তুমি ই বলো যে ইসরাতের কত সময় লাগবে?   


Challenge 📢 : যদি প্রথম ইনপুট Array না হয় এবং ২য় ইনপুট যদি নাম্বার না হয় তাহলে Invalid Input রিটার্ন করবে।

 */

function waitingTime(waitingTimes, serialNumber) {
    // You have to write your code here
    if (!Array.isArray(waitingTimes) || 
        typeof serialNumber !== "number" || 
        serialNumber <= waitingTimes.length) {
        return "Invalid Input";
    }

    let totalWaitingTime = 0;
    for (const time of waitingTimes) {
        totalWaitingTime += time;
    }

    const interviewGiven = waitingTimes.length;
    const avgWaitingTime = Math.round(totalWaitingTime / interviewGiven);

    const interviewerExceptHer = serialNumber - 1;
    const remainingInterviewer = interviewerExceptHer - interviewGiven;

    const herWaitingTime = remainingInterviewer * avgWaitingTime;

    return herWaitingTime;
}

const input = waitingTime([3, 5, 7, 11, 6], 10);
const input2 = waitingTime([13, 2], 6);
const input3 = waitingTime([13, 2, 6, 7, 10], 6);
const input4 = waitingTime([6], 4);
const input5 = waitingTime(7, 10);
const input6 = waitingTime("[6,2]", 9);
const input7 = waitingTime([7, 8, 3, 4, 5], "9");

console.log(input);
console.log(input2);
console.log(input3);
console.log(input4);
console.log(input5);
console.log(input6);
console.log(input7);

