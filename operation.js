let n = 90;

console.log(-n);//converts to negative value

//different conversions
console.log(1 + "2");//12
console.log(2 + "1");//12

console.log(2 + 2 + "1");//41
console.log("1" + 2 + 2);//122

let x = 2;
console.log(x++);
let y = 9;
console.log(++y);

//comparision

console.log("2" > 1);

console.log(null > 0);//it converts null to number and than compare. this false
console.log(null >= 0);// it brings true

//=== strict conversion
console.log("2" > 2);// the datatype is considered with that as one is string and other number