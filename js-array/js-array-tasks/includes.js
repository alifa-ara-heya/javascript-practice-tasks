/* 3. Checking Array Membership with ‘includes’
Instructions:

Create an array of books containing different book.

Use the includes method to check if the array contains a javascript book.

Print a message to the console indicating whether the element is present in the array or not. */

const books = ['Harry Potter', 'IT', 'Mocking birds', 'kothao keu nei'];
console.log(books.includes('Harry Potter')); //true

if (books.includes('Javascript Book')) {
    console.log("This array contains a javascript book.");
}
else{
    console.log("It does not contain a javascript book.");
}