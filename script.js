var questions = [{
    question: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    question: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  },
  {
    question: "Which of these is not used to loop?",
    choices: ["for", "while", "foreach", "sequence"],
    answer: "sequence"
  },
  {
    question: "Which of these is not a way to save a variable",
    choices: ["vet", "var", "let", "const"],
    answer: "vet"
  },
  {
    question: "JS date function starts in seconds to current day from what day in 1970",
    choices: ["January 1", "December 31", "June 1", "April 23"],
    answer: "January 1"
}];

//timer for quiz
var timer = document.getElementById("timer");
var endScore = document.querySelector("#scoreBoard");
var submitScoreBtn = document.getElementById("enterScorebtn");
var inputName = document.getElementById("nameInput");

var timeLeftSec = 60;
function setTime() {
    var timeInterval = setInterval(function() {
        timeLeftSec--;
        console.log(timeLeftSec);
        timer.textContent = "Time: " + timeLeftSec;

        if(timeLeftSec === 0) {
            clearInterval(timeInterval);
            questionSlide.setAttribute("style", "display:none");
            landingCard.setAttribute("style", "display: block");
            endScore.textContent = "Your score is: " + timeLeftSec;

        }
    }, 1000);
}

//start of quiz

var startBtn = document.getElementById("#")
var questionCard = 
var landingCardVar = 