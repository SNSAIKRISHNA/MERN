let welcomemsg = document.getElementById("welcome-el");
let displayEl = document.getElementById("diplaycount");
let vegan = false;

//function with If else 
//And If.. elseIf...Else
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
console.log( rolldice() )


//Loggical Operator (AND) and ( OR)

let hascompleted = true;
let givecertificate = true;

if(hascompleted === true && givecertificate == true ){
  generatecertificate()
}
function generatecertificate(){
  console.log("Show solution")
}

// logical OR opreator
let hascompleted1 = false;
let givecertificate1 = true;

if(hascompleted1 === true || givecertificate1 == true ){
  generatecertificate()
}
function generatecertificate(){
  console.log("Show solution")
}

//Objects in JavaScript:
//Key value pair 

let course ={
  title: "Js Basics",
  creator : "Kirito",
  level: 1,
  length : 63,
  isfree: false,
  tags: ["html", "css"]
}
console.log(course.level)

//Challenge of Object:
let person ={
  name: "kirito",
  age: 21,
  country: "india",

}
function logdata(){
  console.log(person.name + " is " + person.age + " lives in " + person.country)
}
logdata()

//AddEventListener 

let buttonEl = document.getElementById("open-btn")

buttonEl.addEventListener("click", function(){
  console.log("I want to  open the open ")
})