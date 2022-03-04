const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
  };
};
//Function takes user input and applies it to makeRows function
function returnText(){
  let input = document.getElementById("userInput").value;
  makeRows(input, input)
}

// function that clears the grid
function clearGrid(){
    (".grid-item").remove();
};  


function newGrid(){
  clearGrid()
  let input = prompt("How many rows/columns?")
  makeRows(input, input)

}

