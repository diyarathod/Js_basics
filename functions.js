function myName() {
    console.log("Hello");
}

myName //is reference
myName() // execution

//whenever we pass the variables in function defination it is paramenter
//and when in the declaration it is arguments
// function add(a, b) {
//     console.log(a + b);
// }
// add(2, 3);


//when want to return something from functon and store in the variable
function re(a, b) {
    return a + b;
}
//here we have stored the value in a const variable so we have to return something in function
// const result = re(4, 6);
// console.log(result);

//using back ticks
function isLoggedIn(username) {
    return `${username} is logged in`
}
// console.log(isLoggedIn("diya"));// consoling is important
//when we do not pass anything in the function, it shows undefined and not null

//want to show all data
function calculate(...num1) {
    return num1;
}
// console.log(calculate(200, 200, 500));// here the values are more but the variable declared is one in function
//so we use rest operator or spread operator like ...num1;

//access object using function


//--------------------------------------------------------------------
const use = {
    us: "diya",
    price: 300
}

function check(obj) {
    console.log(`username is ${obj.us} and price is ${obj.price}`)
}

check(use);//complusory enter the object name which is use

//doing using object

check({
    us: "lion",
    price: 200
}) //alternate way to pass the data or object

// ----------------------------
//doing using array
const arr = [200, 300, 40]

function ret(getarr) {
    return getarr;
}

console.log(ret(arr));