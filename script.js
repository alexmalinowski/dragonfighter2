// This application is functioning, minus the ability to subtract from let dragonHP using the buttons.


// These variables determine damage dealt and dragon HP.

let fireNumber = 3-1+" "+"fire";
let iceNumber = 1+1+" "+"ice";
let poisonNumber = 4;
let dragonHP = 10;


// Poison button
document.body
  .querySelector(".buttonPoison")
  .addEventListener("click", function dmger(dragonHP, poisonNumber) {
// let total is intended to display the dragon's HP after subtraction.
    let total = dragonHP - poisonNumber;
      document.body.querySelector(".total2").innerHTML = total;

    }
 );

// While loop detect's dragon's health and displays victory message.
while (dragonHP <= 0) {
      document.body.querySelector(".outcome2").innerHTML =
        "You have defeated the mighty dragon.";
}

// The functions below display damage numbers and sentences.
function dmgTracker(fireNumber) {
  let eleFire = document.createElement("div");
  eleFire.innerHTML = fireNumber;
  document.body.appendChild(eleFire);
}

document.body
  .querySelector(".buttonFire")
  .addEventListener("click", function () {
    dmgTracker(fireNumber);
  });

function dmgTracker(iceNumber) {
  let eleIce = document.createElement("div");
  eleIce.innerHTML = iceNumber;
  document.body.appendChild(eleIce);
}

document.body
  .querySelector(".buttonIce")
  .addEventListener("click", function () {
    dmgTracker(iceNumber);
  });

document.body
  .querySelector(".buttonPoison")
  .addEventListener("click", function () {
    dmgTracker(poisonNumber);
  });

function dmgTracker(poisonNumber) {
  let elePoison = document.createElement("div");
  elePoison.innerHTML =
    "Thine attack yields" +
    " " +
    poisonNumber +
    " " +
    "damage! The dragon's hitpoints are at:" +
    " " +
    dragonHP;
  document.body.appendChild(elePoison);
}