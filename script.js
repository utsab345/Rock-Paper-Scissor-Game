let userscore = 0;
let compscore = 0;
const choice = document.querySelectorAll(".image");
const userScore = document.querySelector("#userScore");
const compScore = document.querySelector("#compScore");
const msg = document.querySelector("#msg");
const userOption = document.querySelector(".userChoice");
const compOption = document.querySelector(".compChoice");
const restartBtn = document.querySelector("#btn");

const getCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  console.log("Game was draw");
  msg.innerHTML = `Game was draw`;
  msg.style.backgroundColor = "#141414";
};

const showWinner = (userWin) => {
  if (userWin) {
    console.log("You won");
    userscore++;
    userScore.innerHTML = `${userscore}`;
    msg.innerHTML = `Congratulation !! You won the game`;
    msg.style.backgroundColor = "green";
  } else {
    console.log("You Lose");
    compscore++;
    compScore.innerHTML = `${compscore}`;
    msg.innerHTML = `Opps !! You lose the game`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  console.log("user-choice =", userChoice);
  //Generating Computer Choice
  const compChoice = getCompChoice();
  compOption.innerHTML = `Computer-Choice: ${compChoice}`;

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice == "rock") {
      userWin = compChoice === "scissor" ? true : false;
    } else if (userChoice === "paper") {
      userWin = compChoice === "rock" ? true : false;
    } else {
      userWin = compChoice === "paper" ? true : false;
    }
    showWinner(userWin);
  }
};

choice.forEach((data) => {
  data.addEventListener("click", () => {
    let userChoice = data.getAttribute("id");
    userOption.innerHTML = `Your-Choice: ${userChoice}`;
    playGame(userChoice);
  });
});

restartBtn.addEventListener("click", () => {
  compScore.innerHTML = `0`;
  userScore.innerHTML = `0`;
  compOption.innerHTML = `Computer-Choice:`;
  userOption.innerHTML = `Your-Choice:`;
});
