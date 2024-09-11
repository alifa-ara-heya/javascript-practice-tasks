function calculateTax(income, expenses){
    if (income <= 0 || expenses <= 0 || expenses > income){
        return "Invalid Input";
    }
    const tax = (income - expenses) * .20;
    return tax;
}


function sendNotification(email) {
    if (!email.includes('@')){
        return "Invalid Email";
    }
    const arrayEmail = email.split("@");
    const message = `${arrayEmail[0]} sent you an email from ${arrayEmail[1]}`
    return message;
}


function checkDigitsInName(name) {
    if (typeof name !== "string") {
        return "Invalid Input";
    }

    for (const letter of name) {
        if (!isNaN(letter)) {
            return true;
        }
    }
    return false;
    
}


function calculateFinalScore(obj) {
    const testScore = obj.testScore;
    const schoolGrade = obj.schoolGrade;
    const isFFamily = obj.isFFamily;
    const familyScore = 20;


    if (typeof obj !== "object" ||
        testScore === undefined ||
        schoolGrade === undefined ||
        isFFamily === undefined ||
        typeof testScore !== "number" || testScore > 50 ||
        typeof obj.name !== "string" || 
        typeof schoolGrade !== "number" || schoolGrade > 30 ||
        typeof isFFamily !== "boolean") {
        return "Invalid Input";
    }

    let finalScore = testScore + schoolGrade;

    if (isFFamily === true) {
        finalScore += familyScore;
    }

    return finalScore >= 80;

}


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