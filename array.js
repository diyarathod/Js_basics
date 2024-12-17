// const arr = [0, 1, 2, 3, 4, 5];

// console.log(arr[3]);

// const arr1 = ["abc", "def", "grapes"];

// console.log(arr1[2]);
//new way to decalre the array

// const arr2 = new Array("1", "hello", 4, 5);

// console.log(arr2[2]);


//Array methods

// const meth = [1, 2, 3, 4, 5];
// meth.push(3);//add from back
// meth.pop(3);//remove from back
// console.log(meth);
// meth.shift()//remove from front
// meth.unshift(5);//add from front
// // console.log(meth);

// const newarr = new Array(1, 3, 4, 6, 7, 9);

// console.log("A", newarr);

// const sli = newarr.slice(1, 3);
// console.log("b", sli);
// console.log("new", newarr);

// const spli = newarr.splice(1, 3);
// console.log("C", spli);
// console.log("new", newarr);

// const array = new Array(1, 4, 6, 8, 3);
// const array2 = new Array(3, 6, 7, 2);
// const final = array.concat(array2);
// console.log(final)
//OR
// const final2 = [...array, ...array2];
// console.log(final2)

// const a1 = [1, 2, 4, [5, 7, 9, 0, 6], [5], 4];
// console.log(a1.flat(1));//number given is what depth we want to go

//convert string or any object to array

// const ar1 = new String("Rathod Diya");
// console.log(Array.isArray(ar1))
// console.log(Array.from(ar1));
// console.log(typeof ar1)

//convert the different values in single array using of

// const a1 = 200;
// const a2 = 330
// const a3 = 784;

// console.log(Array.of(a1, a2, a3))