// what is today?

const today = new Date();
console.log(today); //2024-09-08T20:17:31.498Z

const date = new Date("2026-10-2");
console.log(date); //2026-10-02T04:00:00.000Z

const specificDate = new Date(2091, 0, 26);
console.log(specificDate); //2091-01-26T05:00:00.000Z


console.log(date.getMonth()); // gives the current month
console.log(date.getDay()); //gives the current day

specificDate.setMonth(10); //here, 10 is the index of the 11th month if we think of the 12 months as an array.
console.log(specificDate); // 2091-11-26T05:00:00.000Z
console.log(specificDate.toLocaleString('en-GB')); //26/11/2091, 00:00:00, gives you the date as the format of Bangladesh/ Great Britain.


// unix epoc

// time zone
