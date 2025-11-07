let welcomemsg = document.getElementById("welcome-el");
let displayEl = document.getElementById("diplaycount")

let vegan = false;

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


let menu= ['Idly', 'Chicken','dosa','puri']

function Count(){
for(let i =0; i < menu.length; i++ ){
    let li = document.createElement("li")
    li.textContent =menu[i]
    displayEl.appendChild(li);
    
}}