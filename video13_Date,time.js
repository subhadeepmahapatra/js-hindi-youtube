// Date and Time in depth in js 
// console.log(Date()); 
// console.log(new Date()); 
const myDate = new Date();
// console.log(myDate.toString()); 
// console.log(myDate.toDateString()); //date & day & mohth

// UTC stand for (Coordinated Universal Time)
// console.log(myDate.toISOString()); 
// console.log(myDate.toLocaleDateString()); 

//interview question what is the data type of date 
// console.log(typeof myDate); 
// console.log(typeof Date);
// console.log(typeof Date());

//  let myCreatedData = new Date(2024, 12, 8);
//  let myCreatedData = new Date(2024, 12, 8, 5, 9, 22);
 let myCreatedData = new Date("2024-07-07"); //MM-DD-YY
//  console.log(myCreatedData.toLocaleString());

let myTimeStamp = Date.now();
// console.log(Date.now());
// console.log(myCreatedData.getTime()); 
// console.log(Math.floor(Date.now()/1000));

// let newDate = new Date();
// console.log(new Date().getMonth()+1);
// console.log(new Date().getDate());
// newDate.toLocaleString('default',{
//     weekday: 'long',
// })


// British English uses day-month-year order and 24-hour time without AM/PM
const event = new Date(Date.UTC(2024, 7, 7, 11, 10, 40));
console.log(event.toLocaleString('en-GB', { timeZone: 'UTC' }));
