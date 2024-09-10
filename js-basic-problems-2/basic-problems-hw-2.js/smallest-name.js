/* Find the friend with the smallest name.
const friends = ['rahim', 'robin', 'rafi', 'ron', 'rashed']; */

const friends = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
let smallestName = friends[0];
for (const friend of friends){
    if (friend.length < smallestName.length){
        smallestName = friend;
    }
}

console.log(smallestName);