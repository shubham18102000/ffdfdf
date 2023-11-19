/******************object ********************* */
// singleton 

// object literals
//object.create //constructor method

// symbol decleration in javascript *****************............../
const mySymbol = Symbol("key")


// object literals
const JsUser = {
   // name = key , sHUBHAM = value
    name:"shubham",
    age:18,
    ["mysymbol"] :"chamoli",// symbol decleration inside the object
    location: "Jaipure",
    email:"shubham@gmail.com",
    isLoggedIn: false 
}
// how to access above value 
// one way to call objec
console.log(JsUser.email)
// output= shubham@gmail.com
// another way to call object is
console.log(JsUser["email"])
console.log(JsUser.mysymbol)