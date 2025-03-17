let moveArr = ["Rock", "Paper", "Scissor"];

let myMove = "";
let reset = "";
let computerWins = 0;
let myWins = 0;
const buttons = document.querySelectorAll(".btn");
const status = document.getElementById("status");
const myWin = document.getElementById("myWin");
const compWin = document.getElementById("compWin");

function displayText(choice) {
  document.getElementById("your-move").innerHTML = choice;
  myMove = choice;
}
const compMoveText = document.getElementById("comp-move");


buttons.forEach(button => {
  button.addEventListener("click", function () {

    let index = Math.floor((Math.random()) * moveArr.length);

    let compMove = moveArr[index];

    compMoveText.innerHTML = compMove;

    let moveAns = checkWin(myMove, compMove);

    if (moveAns === "Draw") {
      status.innerHTML = "its a draw";
    }
    else if (moveAns === myMove) {
      status.innerHTML = `You Win!`;
      myWin.innerHTML = `My Points = ` + myWins;

    } else {

      status.innerHTML = `Computer wins!`;
      compWin.innerHTML = `computer Points = ` + computerWins;
    }

  });

});


function checkWin(myMove, compMove) {

  if (myMove === compMove) {
    return "Draw";
  }

  else if ((myMove === "Rock" && compMove === "Scissor") ||
    (myMove === "Paper" && compMove === "Rock") ||
    (myMove === "Scissor" && compMove === "Paper")) {
    myWins++;
    return myMove;
  } else {
    computerWins++;
    return compMove;
  }
}