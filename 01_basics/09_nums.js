/*const score = 400
const balance = new Number("100")//specially cast to number
console.log(balance);
console.log(balance.toString().length);
console.log(balance.tofixed(1));
*/

const otherNumber = 123.896
console.log(otherNumber.toPrecision(5));
//output is 123.90

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));// ACCCORDING TO INDIAN STANDARD
