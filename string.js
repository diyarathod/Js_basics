const name = "diya"
const num = 70;

console.log(`Hello my name is ${name}`);

const newName = new String("hello");
// console.log(newName);
// console.log(newName[1]);
// console.log(newName.toLowerCase());
// console.log(newName.charAt(3));
// console.log(newName.indexOf('o'));

// console.log(newName.substring(0, 2));

//string to array
const strArr = new String("diya-rathod");

console.log(strArr.split('a'));//[ 'diy', '-r', 'thod' ]
console.log(strArr.split('-'));//[ 'diya', 'rathod' ]