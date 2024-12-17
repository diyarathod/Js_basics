let score = "9aa";

console.log(typeof score);// here it will show a number when it is just number else string


let value = Number(score);
console.log(typeof value);// after we convert it to a number it will show number
console.log(value); //if there s characters in the string than it will show NaN
// which means after converting it will not be number but a not a  number value


// "33"=> 33
//"22abc" =>NaN
// undefined => Nan
// true => 1
