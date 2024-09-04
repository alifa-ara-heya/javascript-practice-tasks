const address = "12, andorkilla";
// slice works both for array and strings
console.log(address.slice(4, 8)); //ando
const roadNum = address.slice(0,2);
console.log(roadNum); //12

// substring dekhte hobe

const sentence = "I am a good and hardworking student";
console.log(sentence.split());  //[ 'I am a good and hardworking student' ]
console.log(sentence.split(" ")); //[ 'I', 'am', 'a', 'good', 'and', 'hardworking', 'student' ]

const friendsStr = "mahim, fahim, abdullah, abd urrahman, jahid";
console.log(typeof(friendsStr)); //string
friends = friendsStr.split(',');
console.log(friends); //[ 'mahim', ' fahim', ' abdullah', ' abdurrahman', ' jahid' ]
console.log(typeof(friends)); //object

// join = opposite of split

const realFriend = ["Fatema", "Ritu", "AYesha", "Fahima"];
console.log(typeof(realFriend)); //object
let realFriendStr = realFriend.join();
console.log(realFriendStr); //Fatema,Ritu,AYesha,Fahima
console.log(typeof(realFriendStr)); //string
realFriendStr = realFriend.join("|");
console.log(realFriendStr); //Fatema|Ritu|AYesha|Fahima


// concat string = joining two strings

const first = "Ashraful";
const last = "Islam";
const fullName = first + " " + last;
console.log(fullName); //Ashraful Islam

let fullName2 = first.concat(last);
console.log(fullName2); //AshrafulIslam;
fullName2 = first.concat(" ").concat(last);
console.log(fullName2); //Ashraful Islam

// includes
console.log(last.includes("d")); //false
console.log(last.includes("S")); //false
console.log(last.includes("s")); //true
console.log(fullName.includes(" ")); //true