const container = document.querySelector(".container");
const gridSquare = document.getElementsByClassName("gridSquare");
const clearBTN = document.querySelector(".clearBTN");
const colorButton = document.querySelector(".colorButton")
let squareAmount = 16;
let userAmount;
let buttonColor;
let buttonChoice;

/* This function creates 16x16 grid or what ever input the user has given, the event listner at the
 bottom of the function makes it that when a user hovers over a grid square it turns black. 
*/
function fullGrid(e) {
  for (let i = 0; i < e*e; i++) {
    square = document.createElement("div");
    container.appendChild(square);
    square.className = "gridSquare";
    
  }
  for (let i = 0; i < gridSquare.length; i++) {
    gridSquare[i].addEventListener("mouseover", () => {
      gridSquare[i].className += " squareBlack";
    });
  }
  container.style.setProperty('grid-template-columns', 'repeat(' + userAmount + ', auto)');
}

colorButton.addEventListener("click", () => {
  buttonChoice = prompt("What color would you like?").toLowerCase()
  let hasNumber = /\d/;   
  if(hasNumber.test(buttonChoice) === false && (lower.indexOf(buttonColor) > -1)){
    buttonColor = buttonChoice
  }
  else if(hasNumber.test(buttonChoice) !== false || (lower.indexOf(buttonColor) < -1))
    do {buttonChoice = prompt("Please enter a color, not a number.").toLowerCase()
      checkSum = hasNumber.test(buttonChoice)}
    while (checkSum === true)
      buttonColor = buttonChoice

  // if (lower.indexOf(buttonColor) > -1) {
  //   console.log("In the array!")
  // } else {
  //   console.log("Not in the array")
  // }
      
  function changeBGColor() {
    let cols = document.getElementsByClassName('squareBlack');
    for(i = 0; i < cols.length; i++) {
      cols[i].style.backgroundColor = buttonColor;
    }
  }
  changeBGColor()
})

/* This event lister the the clear button clears all drawing on the grid and asks the user how big the grid
 that they want should be. If user enters a number below 4 or above 100 it sends another prompt asking
 the user to select a number between 4 and 100. This also removes the original grid and replaces it
 with the users desired size.
*/
clearBTN.addEventListener("click", () => {
  for (let i = 0; i < gridSquare.length; i++) {
    gridSquare[i].classList.remove("squareBlack");
  }
  userAmount = prompt(
    "The current grid is 16x16, what number of square x square would you like?"
  );
  if (userAmount == "") {
    userAmount = 16;
  }
  while (parseInt(userAmount) < 4 || parseInt(userAmount) > 100) {
    userAmount = prompt(
      `Please enter a number between 4 and 100.
The current grid is 16x16, what number of square x square would you like?`
    );
  }
  squareAmount = parseInt(userAmount);
  while (container.hasChildNodes()) {
    container.removeChild(container.firstChild);
  }
  fullGrid(squareAmount);
});

fullGrid(squareAmount);



const CSS_COLOR_NAMES = [
  "AliceBlue",
  "AntiqueWhite",
  "Aqua",
  "Aquamarine",
  "Azure",
  "Beige",
  "Bisque",
  "Black",
  "BlanchedAlmond",
  "Blue",
  "BlueViolet",
  "Brown",
  "BurlyWood",
  "CadetBlue",
  "Chartreuse",
  "Chocolate",
  "Coral",
  "CornflowerBlue",
  "Cornsilk",
  "Crimson",
  "Cyan",
  "DarkBlue",
  "DarkCyan",
  "DarkGoldenRod",
  "DarkGray",
  "DarkGrey",
  "DarkGreen",
  "DarkKhaki",
  "DarkMagenta",
  "DarkOliveGreen",
  "DarkOrange",
  "DarkOrchid",
  "DarkRed",
  "DarkSalmon",
  "DarkSeaGreen",
  "DarkSlateBlue",
  "DarkSlateGray",
  "DarkSlateGrey",
  "DarkTurquoise",
  "DarkViolet",
  "DeepPink",
  "DeepSkyBlue",
  "DimGray",
  "DimGrey",
  "DodgerBlue",
  "FireBrick",
  "FloralWhite",
  "ForestGreen",
  "Fuchsia",
  "Gainsboro",
  "GhostWhite",
  "Gold",
  "GoldenRod",
  "Gray",
  "Grey",
  "Green",
  "GreenYellow",
  "HoneyDew",
  "HotPink",
  "IndianRed",
  "Indigo",
  "Ivory",
  "Khaki",
  "Lavender",
  "LavenderBlush",
  "LawnGreen",
  "LemonChiffon",
  "LightBlue",
  "LightCoral",
  "LightCyan",
  "LightGoldenRodYellow",
  "LightGray",
  "LightGrey",
  "LightGreen",
  "LightPink",
  "LightSalmon",
  "LightSeaGreen",
  "LightSkyBlue",
  "LightSlateGray",
  "LightSlateGrey",
  "LightSteelBlue",
  "LightYellow",
  "Lime",
  "LimeGreen",
  "Linen",
  "Magenta",
  "Maroon",
  "MediumAquaMarine",
  "MediumBlue",
  "MediumOrchid",
  "MediumPurple",
  "MediumSeaGreen",
  "MediumSlateBlue",
  "MediumSpringGreen",
  "MediumTurquoise",
  "MediumVioletRed",
  "MidnightBlue",
  "MintCream",
  "MistyRose",
  "Moccasin",
  "NavajoWhite",
  "Navy",
  "OldLace",
  "Olive",
  "OliveDrab",
  "Orange",
  "OrangeRed",
  "Orchid",
  "PaleGoldenRod",
  "PaleGreen",
  "PaleTurquoise",
  "PaleVioletRed",
  "PapayaWhip",
  "PeachPuff",
  "Peru",
  "Pink",
  "Plum",
  "PowderBlue",
  "Purple",
  "RebeccaPurple",
  "Red",
  "RosyBrown",
  "RoyalBlue",
  "SaddleBrown",
  "Salmon",
  "SandyBrown",
  "SeaGreen",
  "SeaShell",
  "Sienna",
  "Silver",
  "SkyBlue",
  "SlateBlue",
  "SlateGray",
  "SlateGrey",
  "Snow",
  "SpringGreen",
  "SteelBlue",
  "Tan",
  "Teal",
  "Thistle",
  "Tomato",
  "Turquoise",
  "Violet",
  "Wheat",
  "White",
  "WhiteSmoke",
  "Yellow",
  "YellowGreen",
];

const lower = CSS_COLOR_NAMES.map(element => {
  return element.toLowerCase();
});