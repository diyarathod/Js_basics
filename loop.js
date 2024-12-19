//if
if (2 === "2") {
    console.log("True")
}

//falsy values
// NaN, false, 0, BigInt 0n, -0, null, undefined, ""

//truthy values
//anything added in the string is clled a truthy value
//like "0","moenday"," ", "false",[],{}, funation() {}

//check object is empty
const ob = {
    //name: "dia"
}
if (Object.keys(ob).length === 0) {
    console.log("Empty");
}

//remember
false == 0// it is true
false == "" // it is true
0 == ""// it is true

