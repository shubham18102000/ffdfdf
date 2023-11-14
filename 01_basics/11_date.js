// date january 1, 1970 
// millisecond

//tc39 temporal is api in javascript//
// in future temporal is global standard like math

//*****************************Date */

//let myDate = new Date()
// date is object in javascript when typeof
//console.log(myDate.toLocaleString());
// comment output 2023-11-14T03:03:04.592Z

// comment of localstring 11/14/2023, 3:03:59 AM

//console.log(typeof myDate)

let date = new Date("01-14-2023")// in javascript the month start from 0 mm-dd-yy

//console.log(date.toLocaleString());

let myTimeStamp = Date.now()
//console.log(myTimeStamp);
//console.log(date.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate);

