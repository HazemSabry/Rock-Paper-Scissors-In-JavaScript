let yourScoreNumber = 0;
let computerScoreNumber = 0;

const selections = [
  { name: "rock", emoji: "✊" },
  { name: "paper", emoji: "✋" },
  { name: "sizer", emoji: "✌" },
];

const yourScore = document.getElementById("your-score");
const computerScore = document.getElementById("computer-score");
const yourSelections = document.getElementById("your-selections");
const computerSelections = document.getElementById("computer-selections");

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const sizer = document.getElementById("sizer");

rock.addEventListener("click", () => {
  const computerChoice = computerSelection();
  let winner = determineWinner("rock", computerChoice.name);
  addScore(winner);
  addEmojiSelect("✊", computerChoice.emoji);
});

paper.addEventListener("click", () => {
  const computerChoice = computerSelection();
  let winner = determineWinner("paper", computerChoice.name);
  addScore(winner);
  addEmojiSelect("✋", computerChoice.emoji);
});

sizer.addEventListener("click", () => {
  const computerChoice = computerSelection();
  let winner = determineWinner("sizer", computerChoice.name);
  addScore(winner);
  addEmojiSelect("✌", computerChoice.emoji);
});

const computerSelection = () => {
  return selections[Math.round(Math.random() * 2)];
};

const determineWinner = (yourChoice, computerChoice) => {
  console.log("yourChoice:" + yourChoice);
  console.log("computerChoice:" + computerChoice);
  if (yourChoice === computerChoice) return 0;
  else if (yourChoice === "rock" && computerChoice === "sizer") return 1;
  else if (yourChoice === "paper" && computerChoice === "rock") return 1;
  else if (yourChoice === "sizer" && computerChoice === "paper") return 1;
  else return -1;
};

const addScore = (winner) => {
  if (winner === 0);
  else if (winner === 1) yourScore.innerHTML = ++yourScoreNumber;
  else if (winner === -1) computerScore.innerHTML = ++computerScoreNumber;
  console.log("yourScoreNumber: " + yourScoreNumber);
  console.log("computerScoreNumber: " + computerScoreNumber);
};

const addEmojiSelect = (yourSelectEmoji, computerSelectEmoji) => {
  yourSelections.innerHTML += `<div class="rock">${yourSelectEmoji}</div>`;
  computerSelections.innerHTML += `<div class="rock">${computerSelectEmoji}</div>`;
};
