var count = 10
var ghost = Math.ceil(Math.random() * 16)
var bomb = Math.ceil(Math.random() * 16)
while (bomb === ghost){
  bomb = Math.ceil(Math.random() * 16)
}

//var answer1 = ghost
//var answer2 = bomb

const locationCheck = (location) =>{
  count --
  //alert("I WAS CLICKED")

    document.getElementById("currentCount").innerHTML = count
    //alert("Counting")

    if (count == 0){
      gameOver()
      document.getElementById("gameBoard").style.pointerEvents = "none"
    }
    else {
      document.getElementById(location).innerHTML = "<img  src=/images/openBook2.png>"
      document.getElementById(location).onclick = ""
    if (location === ghost ){
        document.getElementById(location).innerHTML = "<img  src=/images/trap.png>"
        setTimeout(() => { alert("You've Caught the Ghost. You Win!"); }, 500);
        document.getElementById("gameBoard").style.pointerEvents = "none"
    } else if (location === bomb ) {
        document.getElementById(location).innerHTML = "<img  src=/images/slimer2.png>"
        setTimeout(() => { alert("You've Been Slimed. You lose."); }, 500);
        document.getElementById("gameBoard").style.pointerEvents = "none"
      }
    }
  }
console.log("Trap:", ghost)
console.log("Slimer:", bomb)


function gameOver() {
  var r = confirm("You've run out of energy! Try Again?");
  if (r == true) {
    location.reload()
  } else {
    
  }
}