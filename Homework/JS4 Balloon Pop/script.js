//CONSTANTS
let maxSize = 400;
let minSize = 90;

//VARIABLES
let size = 200;
let balloon = document.querySelector(".imgBalloon")
let btnInflate = document.querySelector(".btnInflate")
let btnDeflate = document.querySelector(".btnDeflate")
let btnReset = document.querySelector(".btnReset")

//INITIAL EVENT LISTENERS
btnInflate.addEventListener("click", inflate)
btnDeflate.addEventListener("click", deflate)
btnReset.addEventListener("click", newBalloon)

//FUNCTIONS
function inflate() {
  //increase size/height by 10%
  balloon.height *= 1.1
  //if size exceeds a maximum, 
    //change to popped balloon
    //remove the ability for the user to inflate or deflate a popped balloon.
    if (balloon.height >= maxSize) {
      balloon.src = "popped_balloon.png"
      btnInflate.removeEventListener("click", inflate)
      btnDeflate.removeEventListener("click", deflate)
    }

    if (balloon.height >= minSize && balloon.height <= maxSize) {
      btnDeflate.addEventListener("click", deflate)
    }
}

function deflate() {
  //decrease size/height by 10%
  balloon.height *= 0.9
  //do not decrease the size below the minimum
  if (balloon.height <= minSize) {
    btnDeflate.removeEventListener("click", deflate)
  }
}

function newBalloon() {
  //change any popped balloon back to blue balloon
  balloon.src = "blue_balloon.png"
  //return balloon back to default/initial size
  balloon.height = size
  //restore event listeners
  btnInflate.addEventListener("click", inflate)
  btnDeflate.addEventListener("click", deflate)
}



