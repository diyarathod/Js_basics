// function one() {
//     let us = "diya"
//     console.log(this.us);//cannot be able to use this in simple this. shows error
// }

// const one = (a) => {
//     return a;
// } within curly braces we have to write return
// it is called explicit return

const one = (num1, num2) => (num1 + num2) // in this no curly braces needed
    // just need paranthesis  // it is called implcit return

    //console.log(one(2, 7))

    //IIFE
    // it is used when we want to execute the code immediately

    (function n() {
        console.log(`hello`);
    })();// do not forget to write semicolon

