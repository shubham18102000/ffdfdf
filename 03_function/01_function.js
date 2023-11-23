// // function shubham()
// // {
// //     console.log(" this is me");
// // }

// // shubham();
// // // shubham is referenc 

// // function is block of code call when it is called 

// function addtwonumber(num1 , num2)// parameter
// {
    
//     console.log(num1+num2);
// } 

// addtwonumber(5,null);// this is argument



function loginuser(username)
{
    return `${username} just logged in`
}
console.log(loginuser("shubham"))

// rest and spread operator in javascript

function calculator(...num1)// rest opeartor
{
    return num1
}
console.log(calculator(200, 300, 400));// return value in the form of the array //out
//output is : [ 200, 300, 400 ];