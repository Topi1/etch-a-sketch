const container = document.getElementById("container");
const smallbtn = document.getElementById("smallbtn");
const mediumbtn = document.getElementById("mediumbtn");
const largebtn = document.getElementById("largebtn");

const resetBtn = document.getElementById("reset");

const colorPicker = document.getElementById("colorpicker");

let size = "small";
var mouseDown = false;

function makeGrid(rows, cols) {
    
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);

  for (c = 0; c < (rows * cols); c++) {

    let cell = document.createElement("div");
    

    if (size == "small") {
    container.appendChild(cell).className = "grid-item-small";
    }

    if (size == "medium") {
        container.appendChild(cell).className = "grid-item-medium";
        }
    
    if (size == "large") {
        container.appendChild(cell).className = "grid-item-large";
        }
        
  }
};

makeGrid(16, 16);

container.addEventListener("mouseover", colorChange);
container.addEventListener("click", colorChangeClick);

resetBtn.addEventListener("click", reset);


function clearGrid() {
    container.innerHTML = ''
  }

function reset() {

    clearGrid()
    if (size === "small") {
      makeGrid(16,16)
    } else 
    if (size === "medium") {
      makeGrid(32, 32);
    } else
    if (size === "large") {
      makeGrid(64, 64);
    }

}


function colorChange(e) {
    
    if (mouseDown == true && (e.target.parentElement == container)) {
    e.target.style.backgroundColor = colorPicker.value
    }
  
}

function colorChangeClick(e) {
    
    
    e.target.style.backgroundColor = colorPicker.value
    
  
}


document.body.addEventListener("mousedown", function() {
    mouseDown = true;
  });
  
  document.body.addEventListener("mouseup", function() {
    mouseDown = false;
  });
  

smallbtn.addEventListener("click", function(){
    size = "small";
    clearGrid();
    makeGrid(16, 16);
  });

mediumbtn.addEventListener("click", function(){
    size = "medium";
    clearGrid();
    makeGrid(32, 32);
  });

largebtn.addEventListener("click", function(){
    size = "large";
    clearGrid();
    makeGrid(64, 64);
  });

container.addEventListener("dragstart",(event)=>{
    event.preventDefault();
  });
  
container.addEventListener("drop", (event) => {
    event.preventDefault();
  });