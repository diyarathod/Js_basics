//singleton
// Object.create();


//object literals

const sy = Symbol("hii");
const user = {
    name: "Diya",
    score: 20,
    [sy]: "hii"//declared a symbol
}
// console.log(user.name);
// console.log(user["name"]);
// console.log(typeof sy);

//singleton

// const User = new Object()
//console.log(User);
//OR
const User = {};
User.id = 12;
User.name = "Jam"
User.isLoggedIn = true;

// console.log(User);

//Oject into Object

const us1 = {
    id: 20,
    fullname: {
        firstname: "diya",
        lastname: "rathod"
    },
    roll: 22
}

// console.log(us1.fullname)


//object combining

const ob1 = { 1: "a", 2: "u", 3: "l" }
const ob2 = { 3: "f", 4: "w" };

// const ob3 = Object.assign({}, ob1, ob2);//here {} are important as it is used to return the answer in one array or object
const ob3 = { ...ob1, ...ob2 }// easy to do this . using spread operator
// console.log(ob3);


// multiple data comes in the form of array

const ob4 = [
    {
        id: 1,
        email: "d@gmail.com"
    },
    {
        id: 2,
        email: "e@gmail.com"
    },
    {
        id: 3,
        email: "f@gmail.com"
    },

]
// console.log(ob4[1].email)
// console.log(Object.keys(User));// answer will come in array form [ 'id', 'name', 'isLoggedIn' ]

//if i want to know that is property present in the object

// console.log(User.hasOwnProperty('id'));//true

//object de-structuring

const courses = {
    id: 90,
    courseName: "javscript",
    teacher: "diya"
}

// to access the course data easily

const { id } = courses;//written between curly braces is the data we want to access
console.log(id);
