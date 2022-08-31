"use strict";

/* Quiz 
    create a questions array 
    


 Create a function that will loop through the questions array, 
    and if user clicks on correct answer it will move on to the next question
     else if user clicks on incorrect answer it restarts the quiz from the start

  Display the question and answers on the html page 
        
  
  Create a home button to take user to start again and restart game
*/
//has all the questions and answers in an array
var questionsArray = [{
  question: "question1",
  answers: [{
    a: "answer1a",
    correct: true
  }, {
    b: "answer1b",
    correct: false
  }, {
    c: "answer1c",
    correct: false
  }, {
    d: "answer1d",
    correct: false
  }]
}, {
  question: "question2",
  answers: [{
    a: "answer2a",
    correct: false
  }, {
    b: "answer2b",
    correct: true
  }, {
    c: "answer2c",
    correct: false
  }, {
    d: "answer2d",
    correct: false
  }]
}, {
  question: "question3",
  answers: [{
    a: "answer3",
    correct: true
  }, {
    b: "answer3",
    correct: false
  }, {
    c: "answer3",
    correct: false
  }, {
    d: "answer3",
    correct: false
  }]
}, {
  question: "question4",
  answers: [{
    a: "answer4",
    correct: true
  }, {
    b: "answer4",
    correct: false
  }, {
    c: "answer4",
    correct: false
  }, {
    d: "answer4",
    correct: false
  }]
}];
var homeButton = document.querySelector(".home");
var openingTitle = document.querySelector(".opening");
var cardContainer = document.querySelector(".card-container");
var questionHeading = document.getElementsByClassName("question")[0];
var answerButton = document.querySelectorAll(".answer");
var start = document.querySelector(".start");
var next = document.querySelector(".next");
var answerOption = document.querySelector(".answers");
var optA = document.querySelector("#a");
var optB = document.querySelector("#b");
var optC = document.querySelector("#c");
var optD = document.querySelector("#d");
var optsArray = [optA, optB, optC, optD];
console.log(optsArray[0]); //displays all question cards in one go

var count = 0;

var displayQuestions = function displayQuestions(questions) {
  console.log(questionsArray);
  var questionName = questions[count].question;
  questionHeading.innerHTML = "";
  console.log(questionName);
  questionHeading.innerHTML += questionName;
  answerButton.forEach(function (answer) {
    answer.innerHTML = "";

    if (answer.value === "a") {
      answer.setAttribute("data-status", questions[count].answers[0].correct);
      answer.innerHTML += questions[count].answers[0].a;
    } else if (answer.value === "b") {
      answer.setAttribute("data-status", questions[count].answers[1].correct);
      answer.innerHTML += questions[count].answers[1].b;
    } else if (answer.value === "c") {
      answer.setAttribute("data-status", questions[count].answers[2].correct);
      answer.innerHTML += questions[count].answers[2].c;
    } else if (answer.value === "d") {
      answer.setAttribute("data-status", questions[count].answers[3].correct);
      answer.innerHTML += questions[count].answers[3].d;
    }
  });
};

var startQuiz = function startQuiz() {
  //run functions that displays the questions
  openingTitle.classList.add("hidden");
  displayQuestions(questionsArray);
};

var homePage = function homePage() {
  openingTitle.classList.remove("hidden");
  count = 0;
};

var nextQuestion = function nextQuestion() {
  optsArray.forEach(function (option) {
    option.style.color = "black";
  });
  count++;
  displayQuestions(questionsArray);
};

console.log(next);
next.addEventListener("click", nextQuestion);
start.addEventListener("click", startQuiz);
homeButton.addEventListener("click", homePage);
optsArray.forEach(function (option) {
  option.addEventListener("click", function () {
    if (option.dataset.status == "true") {
      //option.classList.add("correct")
      option.style.color = "green";
      console.log(option);
    } else {
      option.style.color = "red";
    }

    console.log(option.dataset.status);
  });
});