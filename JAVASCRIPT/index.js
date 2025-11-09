let welcomemsg = document.getElementById("welcome-el");
let displayEl = document.getElementById("diplaycount");
let vegan = false;

//function with If else
//And If.. elseIf...Else
/**
 * Processes the current dietary status and updates the UI and console accordingly.
 *
 * Reads the global `vegan` flag and updates the global `welcomemsg.innerText`.
 * If `vegan` is strictly equal to true, a vegan message is logged and displayed;
 * otherwise a non-vegan message is logged and displayed.
 *
 * Note: This function relies on two globals: `vegan` and `welcomemsg`. If either is
 * undefined, a ReferenceError may be thrown when the function runs.
 *
 * @function process
 * @throws {ReferenceError} If the global `vegan` or `welcomemsg` identifiers are not defined.
 * @returns {void}
 *
 * @global {boolean} vegan - Global flag indicating whether the user is vegan.
 * @global {{ innerText: string }} welcomemsg - Global DOM-like object whose innerText will be updated.
 *
 * @example
 * // Example setup before calling:
 * // let vegan = true;
 * // let welcomemsg = document.getElementById('welcome');
 * // process();
 */
function process() {
  if (vegan == true) {
    console.log("Here are the vegan foods ");
    welcomemsg.innerText = "Here are the vegan foods ";
  } else {
    console.log("You are not vegan");
    welcomemsg.innerText = "You are not vegan ";
  }
}
function display() {
  welcomemsg.textContent = process();
}

//Arrays
// arrays always start with 0 index

let featurepost = [
  "checkout  my project",
  " hi i am sai ",
  "i have my portfoilo",
];
console.log(featurepost);

//Array with for loop
//Create a element of li

let menu = ["Idly", "Chicken", "dosa", "puri"];

function Count() {
  for (let i = 0; i < menu.length; i++) {
    let li = document.createElement("li");
    li.textContent = menu[i];
    displayEl.appendChild(li);
  }
}

//return statement
//on if and for loop

let palyer1 = 110;
let player2 = 107;

function getfastesttime() {
  if (palyer1 < player2) {
    return palyer1;
  } else if (player2 < palyer1) {
    return player2;
  } else {
    return player2;
  }
}

let fastestRace = getfastesttime();
console.log(fastestRace);

//generate a random number
let reandomNumber = Math.random() * 6;
console.log(reandomNumber);

//math. floor
let reandomNumber1 = Math.floor(32.6789);
console.log(reandomNumber1);

//math floor wraped around math.random
let reandomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(reandomNumber2);

function rolldice() {
  let reandomNumber3 = Math.floor(Math.random() * 6) + 1;
  console.log(reandomNumber3);
}
console.log(rolldice());

//Loggical Operator (AND) and ( OR)

let hascompleted = true;
let givecertificate = true;

if (hascompleted === true && givecertificate == true) {
  generatecertificate();
}
function generatecertificate() {
  console.log("Show solution");
}

// logical OR opreator
let hascompleted1 = false;
let givecertificate1 = true;

if (hascompleted1 === true || givecertificate1 == true) {
  generatecertificate();
}
function generatecertificate() {
  console.log("Show solution");
}

//Objects in JavaScript:
//Key value pair

let course = {
  title: "Js Basics",
  creator: "Kirito",
  level: 1,
  length: 63,
  isfree: false,
  tags: ["html", "css"],
};
console.log(course.level);

//Challenge of Object:
let person = {
  name: "kirito",
  age: 21,
  country: "india",
};
function logdata() {
  console.log(
    person.name + " is " + person.age + " lives in " + person.country
  );
}
logdata();

//AddEventListener

let buttonEl = document.getElementById("open-btn");

buttonEl.addEventListener("click", function () {
  console.log("I want to  open the open ");
});

//Double click in addEventlistener (dblclick)
// deleteBtn.addEventListener("dblclick", function (){
  console.log("double clicked")
  //})
//.innerHTML

function open() {
  displayEl.innerHTML += "<p>" + "Here is your Menu" + "</p>";
}

//CreateElement

function createElement() {
  const li = document.createElement("li");
  li.textContent = myleeds[i];
  ulEl.append(li);
}

//templateStrings (` `) this is templatestring symbol
// we can break the templatestring into multiple lines but we cannot break it in normal string

const name = "kirito";
const sender = "sai";
const email = `hey ${name} ! How are you ( sender=${sender} )`;
console.log(email);

//this is normal
function heloo(){
//**  listItem +=
"<li><a target= '_blank' href='" +
  myleeds[i] +
  "' >" +
  myleeds[i] +
  " </li></a>";
}
//Localstorage in JavaScript
//.getItem && .setItem
//.clear

//localStorage.setItem();
function leeds() {
  localStorage.setItem("name", "Kirito");
  //localStorage.getItem();
  console.log(localStorage.getItem("name"));
  //localStorage.clear();
  localStorage.clear();

  //JSON parse && stringify
  myleeds = JSON.parse(myleeds);
  myleeds = JSON.stringify(myleeds);
}
//Truthy and Falsy Values

//falsy values:
// false
// 0
// ""
// null --> how we ("developer signalize") the [ let currentViewers = null ];
// undefined --> how ("Js signalize") the  [let currentViewers];
// NaN

let trueorfalse = Boolean("");
console.log("falsy:", trueorfalse);

//function and parameter 
//we can pass any datatype to paremeter 

//               paremeters
function greet(name, age , sex){
  welcomemsg.textContent =`Hello ${name} is ${age} old and ${sex} of gender `
}
//         arguments
greet("Kiris",21,"male")


function getFirst(arr){
  console.log( arr[0])
}

getFirst([1,2,3,4,5])