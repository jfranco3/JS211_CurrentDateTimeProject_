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

  return text 

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


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
  
// get a value from form input and put it in a variable 

// if type of input variable is Boolean 
//   return "it's a boolean"
// else if it's a null value (probably type null)
//   return "it's a null value"
  
let a = true
let b = null
let c 
let d = 33
let e = NaN
let f = "This is a string"
// result = " a is " + a + " b is " + b

result = `a is ${a} b is ${b} c is ${c} d is ${d} e is ${e} f is ${f} `

console.log(result)

// Write a JavaScript program that adds 2 numbers together.
// store input numbers
const num1 = 5;
const num2 = 3;

//add two numbers
const sum = num1 + num2

//display sum
console.log('the sum of ' + num1 + ' and ' + num2 + ' is ' + sum);


// Write a JavaScript program that runs only when 2 things are true.
const age = 18;
const ownsCar = true;

if (age >=16 && ownsCar) {
  console.log("Jenn is old enough to drive and owns a car");
} 



// Write a JavaScript program that runs when 1 of 2 things are true.
const someoneElsePaying = true;
const onSale = false;

if (someoneElsePaying || onSale) { 
  console.log("Jenn is going shopping.");
} else {
  console.log("Jenn is not going shopping");
}


// Write a JavaScript program that runs when both things are not true.  
const dryTopSoil= false;
const wiltingLeaves= false;

if (dryTopSoil && wiltingLeaves) {
  console.log("plants need watering");
} else {
  console.log("plants don't need watering");
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
