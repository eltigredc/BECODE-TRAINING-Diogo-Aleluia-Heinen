// Variable

// let
// const
// =====> ES6
// var
// ES5

let name = 'diogo';
const lastName = "heinen";

let test = `"<div class='red'></div>"`

console.log(`My name is ${name} ${lastName}`)
// TYPE de Variable

// numbers
// 1, 1.3, -4

// Toute les opérations mathématiques

// string
// chaine de caractères
console.log(typeof(name));
console.log(3 + parseInt("4"));
// =====> TYPE CASTING
console.log(name[0]);
console.log(name.length);

// boolean
// true false
// =====> Utile pour le conditionnel


// undefined
// let x = null
// null
// console.log(x)
// arrays

let array = ["string", 3, null, true, {name: "diogo"}, ["bonjour", "world", ["hey", "wassup"]]];
console.log(array[0], array[5][2][1]);
// array[5] === ["bonjour", "world", ["hey", "wassup"]]
// array[5][2] === ["hey", "wassup"]
// array[5][2][1] === "wassup"
console.log(typeof(array[5]));

// objects

// key === name
// value === "PY"


// CRUD
// CREATE
let coach = {name: "PY"};
// READ
console.log(coach.name);
console.log(coach["name"]);
// UPDATE
coach.job = "coach";
// coach[tableau[0]] = array[0]
console.log(coach);
// DELETE
// NAN
// Not an number
console.log(5 / "hjsdgqjh");
// functions



// conditionnel

// >
// ===
// !=
// <
// <=
// >=
// ==
// true
// false

// let x = 1
// let running = false
// if(running){
//   console.log('HELLO MAMENES')
// }

// LOOP

// while

// for

// forEach


let i;
// for(initiation de variable - condition - incrémentation)
for (i = 0; i < 10; i++) {
  console.log('hello')
}


// while(condition){
// }
let ar = ["seb", "sylvain", "diogo",["table", "café"]]

ar.forEach((item) => {
  console.log(item)
})
console.log(ar[0])

// functions


// function nameOfTheFunction(parameters){

// }

const nameOfTheFunction = () => {
  // console.log(parameters)
}


nameOfTheFunction("bon app")
nameOfTheFunction("n'oubliez pas mybecode")

nameOfTheFunction('jcvd')

nameOfTheFunction('diogo')

nameOfTheFunction('sandwich')

nameOfTheFunction()



