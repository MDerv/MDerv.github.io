/* Dhruv Sharma
10/01/2020
12/13/2020
This file allows the html button logic to be implemented in the story.
It allows certain pages to be accessed depending on the choices of the user.
*/

var hp = 50;
var pickedSword = false;

//the following commented code may be implemented in the future if I want to create a Firebase Database to store users' progress
/*
var firebaseConfig = {
  apiKey: "AIzaSyCshzo4pnxHj7zkaDrR4tthwotTleGS4JY",
  authDomain: "space-65ce3.firebaseapp.com",
  databaseURL: "https://space-65ce3.firebaseio.com",
  projectId: "space-65ce3",
  storageBucket: "space-65ce3.appspot.com",
  messagingSenderId: "62019877260",
  appId: "1:62019877260:web:115d17a6348d265027bea9",
  measurementId: "G-C9NHYCEZCR"
};

setInterval(updateTime, 1000);
setInterval(updateScore, 30000);

// Initialize Cloud Firestore through Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();

var docRefR = db.doc("samples/red");
var docRefB = db.doc("samples/blue");
const increment = firebase.firestore.FieldValue.increment(1);
*/


function eatBreakfast(){ //run when the user selects the option to eat breakfast; mandatory to not die
  hp = 100;
  window.alert("You feel your stomach grumbling, and decide to quell your hunger with some oats and brown bread.\nYour HP has been replenished to 100.");
}

function pickSword(){ //run when the user selects the option to pick up the sword; mandatory to not die
  pickedSword = true;
  window.alert("You pick up the sword. A smart choice: the world outside is very dangerous. \nA sword has been added to your inventory.");
}

//navigates to one of the two death screens if the user didn't pick up the sword or eat breakfast, or allows user to continue
function houseTasks(){
  if(hp > 50 && pickedSword) {
    window.location.replace("page3.html");
  }
  else if (!pickedSword) {
    window.location.replace("page1.html");
  }
  else if (hp <= 50) {
    window.location.replace("page2.html");
  }
}
