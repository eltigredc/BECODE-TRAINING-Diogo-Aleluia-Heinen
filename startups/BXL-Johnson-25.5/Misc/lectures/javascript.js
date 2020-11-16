// Variable


// var ---> ES5 still works but deprecated

let name = "Diogo" // je peux changer sa valeur

const job = "becode teacher" // sa valeur restera toujours la même

let becode = null
// Number
// exemple ===> 1, -1, 0.5, 100000, pi
// string

// exemple ===> chaine caractères "texte", 'numéro', "5"
let string = "5"
// what is caster un type?

// fonction typeof() --> permet de savoir de quel type de variable il s'agit
string = parseInt(string)
string = string + 4
// console.log(string)
console.log(name[0])
console.log(name.length)
// conclusion une string se comporte comme un tableau

// boolean
let cool = true
let ultracool = false
// ----> très intéressant pour le conditionnel mais on y reviendra.
// undefined
// console.log(typeof(diogo))
// null

console.log(becode)

//NAN
// Not a number
console.log(5/"geklsfdjlk")
// happens when math with stuff other than numbers

// array
// --> tableau

let array = ["1", 4, ["heelo", "diogo", ["bonjour", "tableau"]], name, true, {name: "diogo"}]

console.log(array[1])
console.log(array[2])
console.log(array[2][2][0])

console.log(array.length)
console.log(array[array.length - 1])

let ar = ["html", "css"]
ar.push("js")
console.log(ar)

// Objet





// CRUD
// CREATE
let diogo = {name: "diogo"}

// READ
console.log(diogo)
console.log(diogo.name)
console.log(diogo["name"])
// UPDATE
diogo.lastName = "heinen"
console.log(diogo.lastName)
diogo.name = "Diogo"
console.log(diogo)
// Delete
// remove
// name === key / "diogo" === value
// conditionnel
// if else else if
// if(CONDITION 1){
//   LE CODE A EXECUTER SI LA CONDITION EST RESPECTEE
// }else if(CONDITION 2){
//   LE CODE A EXECUTER SI LA CONDITION 2 EST RESPECTEE
// }else{
//   LE CODE A EXECUTER SI LA CONDITION NEST PAS RESPECTEE
// }
let running = true

let x = 3
let y = 7
// <
// >
// ===
// ==
// !=
// <=
// >=
// true
// false

// if(running){
//   console.log("yey condition juste")
// }else if(){

// }else{

// }


//LOOP

// for
// while
// forEach

// FOR
let i;
//for(valeur - conditon - incrémentation)
for (i = 0; i < 10; i++) {
  console.log('bonjour')
}


// while
// let a = 0
// while (a < 10) {
//   // code block to be executed
//   console.log('bonjour')
//   a++
// }
// running = false

// forEach

let tab = [1,2,"bonjour",4,5]

// tab.forEach((cell) => {
//   console.log(cell)
// })
// ===> ES6

// tab.forEach(function(cell){
//   console.log(cell)
// })

// ====> ES5


// FUNCTION

// function nameOffunction(){

// }

// =====> ES5

const nameOffunction = (argument) => {
  console.log(argument)
}

// nameOffunction("Jean claude van damne")

// nameOffunction('Valérian')

// nameOffunction('PY')

// nameOffunction('bonjour')
// =====> ES

const addition = (val1, val2) => {
  console.log(val1 + val2)
}



addition(2,6)
addition(20,10000)

addition(4,3)








