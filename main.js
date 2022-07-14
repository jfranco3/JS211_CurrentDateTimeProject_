// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.
const numToString = ()=> {

  let convertNum = 10;

  let text = convertNum.toString();

  // return text 
  // document.getElementById().innerHTML = 'this number is a string'
}


// Write a JavaScript program to convert a string to the number.
const strToNum = () => {

  let convertString = "30";

  //another variable to hold the number converted from string
  let newNum = parseInt(convertString)
  
  //console log to check work
  console.log(newNum)

  //return the number
document.getElementById("string-number").innerHTML = newNum;
}


// Write a JavaScript  program that takes in different datatypes and prints out whether they are a:

const dataType = () => {
  let inputBox = document.getElementById("box")
  let userInput = inputBox.value
  let placeHolder = ""
  console.log(inputBox)
  console.log(userInput)


  ///how to determine if null/undefined from input box??

  if (parseInt(userInput)){
    userInput = parseInt(userInput)
  }

  if (userInput == 'true' || userInput === 'false') {
    if (userInput === 'true') userInput = true
    if (userInput === 'false') userInput = false
  }

  if (typeof(userInput) === "number") {
    console.log(userInput + " is a number")
    placeHolder = "number"
  }

  if (typeof(userInput) === "boolean") {
    console.log(userInput + " is a boolean")
    placeHolder = "boolean"
  }
  if (typeof(userInput) === "null") {
    console.log(userInput + " is null")
    placeHolder = "null"
  }
  if (typeof(userInput) === "undefined") {
    console.log(userInput + " is undefined")
    placeHolder = "undefined"
  }
  if (typeof(userInput) === "Nan") {
    console.log(userInput + " is Nan")
    placeHolder = "Nan"
  }
  if (typeof(userInput) === "string") {
    console.log(userInput + " is a string")
    placeHolder = "string"
  }
  document.getElementById("place").innerHTML = placeHolder
}


// Write a JavaScript program that adds 2 numbers together.
// store input numbers
const sumOfTwoNumbers = () => {

const num1 = 5;
const num2 = 3;

const sum = num1 + num2

//display sum
// console.log('the sum of ' + num1 + ' and ' + num2 + ' is ' + sum);

document.getElementById("total-sum").innerHTML = sum;
}

// Write a JavaScript program that runs only when 2 things are true.
const twoThingsTrue = () => {

const age = 18;
const ownsCar = true;

 if (age >=16 == true && ownsCar == true) {
  // console.log("Jenn is old enough to drive and owns a car");

 document.getElementById("two-true").innerHTML = 'Jenn is old enough to drive and owns a car.'
}
}

// Write a JavaScript program that runs when 1 of 2 things are true.
const oneThingTrue = () => {

const notMePaying = true;
const onSale = true;

if (notMePaying == false || onSale == true) { 
  // console.log("Jenn is going shopping.");
  // console.log("Jenn is not going shopping");

  document.getElementById("one-true").innerHTML = 'Jenn is not going shopping.'
}
}

// Write a JavaScript program that runs when both things are not true.  
const noThingTrue = () => {

const dryTopSoil= false;
const wiltingLeaves= false;

if (dryTopSoil ==false && wiltingLeaves == false) {
  // console.log("plants need watering");
  // console.log("plants don't need watering");

document.getElementById("no-true").innerHTML = 'Plants do not need watering.'
}
}

// ***************************
//         PART TWO
// ***************************

// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.

// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
