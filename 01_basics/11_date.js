// date january 1, 1970 
// millisecond

//tc39 temporal is api in javascript//
// in future temporal is global standard like math

//*****************************Date */

let myDate = new Date()
// date is object in javascript when typeof
console.log(myDate.toLocaleString());
// comment output 2023-11-14T03:03:04.592Z

// comment of localstring 11/14/2023, 3:03:59 AM

console.log(typeof myDate)

let date = new Date(2023, 0, 23, 5, 3)// in javascript the month start from 0 

console.log(date.toLocaleString());


