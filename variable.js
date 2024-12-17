var i = 1;
let j = 2;
const k = 20;

console.log(i, j, k);
function abc() {
    var i = 3;
    let j = 2;
    const k = 22;
    i = 90;//i can also be given new value but the const will not be able to.
    j = 8;//as j is  declared with let keyword so we can redeclare value but not the variable j 
    var i = 8;// i can be redeclared as well as value can be given new but LET,CONST will not be able to redeclare
    console.log(i, j, k);

    // console.table([i, j, k]);
}
abc();
console.log(i, j, k);