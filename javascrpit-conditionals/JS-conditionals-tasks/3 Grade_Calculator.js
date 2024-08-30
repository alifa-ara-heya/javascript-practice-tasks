/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

let score = -2;

if (score >= 90 && score <= 100) {
    console.log("Congratulations! You got A");
}
else if (score >= 80 && score < 90) {
    console.log("Congratulations! You got B");
}
else if (score >= 70 && score < 80) {
    console.log("Oops! You got C");
}
else if (score >= 60 && score < 70) {
    console.log("Oops! You got D");
}
else if (score >= 0 && score < 60) {
    console.log("Oh No! You Failed. Go to study");
}
else {
    console.log("Invalid Score");
}
