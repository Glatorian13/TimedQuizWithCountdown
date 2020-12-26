//global scope variables
var questionsEl = document.querySelector("#questionSlide");
var timerEl = document.querySelector("#time");
var choicesEl = document.querySelector("#choiceGroup");
var submitBtn = document.querySelector("#enterScorebtn");
var startBtn = document.querySelector("#btnstartquiz");
var nameEl = document.querySelector("#nameInput");
//state
var qIndex = 0;
var time = questions.length * 10;
var timerIntSet;
//functions to call
function startQ() {
  var landingCardEl = document.getElementById("landingCard");
  landingCardEl.setAttribute("class", "noVis");
  questionsEl.removeAttribute("class", "noVis");
  //start counting down
  timerIntSet = setInterval(clockTick, 1000);
  timerEl.textContent = "Time Left: " + time;
  //start question pull
  pullQ();
}

function pullQ() {
  var currentQ = questions[qIndex];
  var qTitleEl = document.getElementById("questionTitle");
  qTitleEl.textContent = currentQ.title;
  //clear past questions
  choicesEl.innerHTML = "";

  //loop and create
  currentQ.choices.forEach(function(choice, i) {
    var choiceBtnNode = document.createElement("button");
   choiceBtnNode = setAttribute("class", "choice");
  choiceBtnNode = setAttribute("value", "choice");

    //need fix here
    //
    //push to dom
    choiceBtnNode.textContent = i + 1 + ". " + choice;

    //fix

    choiceBtnNode.onclick = qClick;

    choicesEl.appendChild(choiceBtnNode);
  });
}

function qClick() {
  if (this.value !== questions[qIndex].answer) {
    time -= 5;
    if (time < 0) {
      time = 0;
    }
    timerEl.textContent = time;
    ansChkEl.textContent = "Incorrect :(";
    ansChkEl.style.color = "red";
    ansChkEl.style.fontSize = "200%";
  } else {
    ansChkEl.textContent = "Correct!";
    ansChkEl.style.color = "green";
    ansChkEl.style.fontSize = "200%";
  }

  //keep ans chk on screen
  ansChkEl.setAttribute("class", "bold");
  setTimeout(function () {
    ansChkEl.setAttribute("class", "noVis");
  }, 1000);

  //and change to the next question
  qIndex++;

  if (qIndex === questions.length) {
    qEnd();
  } else {
    pullQ();
  }
}
function qEnd() {
  clearInterval(timerIntSet);

  var endEl = document.getElementById("end");
  endEl.removeAttribute("class", "noVis");

  var endScoreEl = document.getElementById("score");
  endScoreEl.textContent = time;

  questions.setAttribute("class", "noVis");
}
function clockTick() {
  time--;
  timerEl.textContent = time;
  if (time <= 0) {
    qEnd();
  }
}
function memHighscore() {
  var nameInput = nameEl.value.trim();
  if (nameInput !== "") {
    var highScores = JSON.parse(window.localStorage.getItem("highScores")) || [];

    var userScore = {
      score: time,
      initals: nameInput
    };
    highScores.push(userScore);
    window.localStorage.setItem("highScores", JSON.stringify(highScores));

    window.location.href = "scoreboard.html";
  }
}

function chkEnter(event) {
  if (event.key === "Enter") {
    memHighscore();
  }
}

//submit inputs
enterScorebtn.onclick = memHighscore;
btnstartquiz.onclick = startQ;
nameEl.onkeyup = chkEnter;



