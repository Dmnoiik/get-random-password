let characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "R",
  "S",
  "T",
  "U",
  "W",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "r",
  "s",
  "t",
  "u",
  "w",
  "y",
  "z",
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  ",",
  ".",
  "/",
  "<",
  ">",
  "?",
  "[",
  "{",
  "}",
  "]",
  "-",
  "_",
  "=",
  "+",
];
let parEl = document.getElementById("par-el");
let btnEl = document.querySelector(".btn");
let inputEl1 = document.querySelector(".input-el1");
let inputEl2 = document.querySelector(".input-el2");
let inputEl3 = document.querySelector(".input-el3");
let inputEl4 = document.querySelector(".input-el4");
let inputNum = document.getElementById("input-num");
// let inputCheckNum = document.getElementById("input-check-num");
// let inputCheckStr = document.getElementById("input-check-str");

function randomChar() {
  let randomNumber = Math.floor(Math.random() * characters.length);
  return characters[randomNumber];
}

function getRandomPassword(number) {
  let str = "";
  for (let i = 0; i < number; i++) {
    str += randomChar();
  }
  return str;
}

btnEl.addEventListener("click", () => {
  let numChecked = document.querySelector("#input-check-num");
  if (inputNum.value == "") {
    inputEl1.value = "Please choose a password's length";
    inputEl2.value = "Please choose a password's length";
    inputEl3.value = "Please choose a password's length";
    inputEl4.value = "Please choose a password's length";
  } else if (inputNum.value < 5 || inputNum.value > 24) {
    inputEl1.value = "Password must be between 5 and 24 characters long";
    inputEl2.value = "Password must be between 5 and 24 characters long";
    inputEl3.value = "Password must be between 5 and 24 characters long";
    inputEl4.value = "Password must be between 5 and 24 characters long";
  } else {
    inputEl1.value = getRandomPassword(inputNum.value);
    inputEl2.value = getRandomPassword(inputNum.value);
    inputEl3.value = getRandomPassword(inputNum.value);
    inputEl4.value = getRandomPassword(inputNum.value);
  }
});

function copyText() {
  //   inputEl1.select();
  navigator.clipboard.writeText(inputEl1.value);
  alert("Copied the text: " + inputEl1.value);
}
