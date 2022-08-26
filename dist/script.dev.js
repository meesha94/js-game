"use strict";

/* Quiz 
    create a questions array 
    store questions and answers as such:
     [
        {question:question1, 
            answers: 
            [
                {answer:answer1, correct:true},
                {answer:answer2, correct:false},
                {answer:answer3, correct:false}, 
                {answer:answer4, correct:false}
                ]
            }
        ]


 Create a function that will loop through the questions array, 
    and if user clicks on correct answer it will move on to the next question
     else if user clicks on incorrect answer it restarts the quiz from the start

  Display the question and answers on the html page 
        will need a h1 tag for question and 4 button tags 
  
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
    correct: false
  }, {
    b: "answer3",
    correct: false
  }, {
    c: "answer3",
    correct: true
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
var questionHeading = document.getElementsByClassName("question")[0];
var answers = document.querySelectorAll(".answer");
var start = document.querySelector(".start");
var next = document.getElementsByClassName("next")[0];
console.log(answers); //displays all question cards in one go

var count = 0;

var displayQuestions = function displayQuestions(questions) {
  //empty string for questionnaNME
  var questionName = questions[count].question;
  console.log(questionName);
  questionHeading.innerHTML += questionName;
  answers.forEach(function (answer) {
    //EMOTY STRING FOR ANSWERS
    if (answer.value === "a") {
      console.log(questions[count].answers[count]);
      answer.innerHTML += questions[count].answers[count].a;
    } else if (answer.value === "b") {
      answer.innerHTML += questions[count].answers[count].b;
    } else if (answer.value === "c") {
      answer.innerHTML += questions[count].answers[count].c;
    } else if (answer.value === "d") {
      answer.innerHTML += questions[count].answers[count].d;
    }
  }); //Ollie- add event listener for all answer buttons and use questioncount to access answers for each question to check in and if else nested stament if it is correct
};

var startQuiz = function startQuiz() {
  //run functions that displays the questions
  displayQuestions(questionsArray);
};

start.addEventListener("click", startQuiz);
var container = document.querySelector(".card-container"); //displays questions one at at time,
//let count = 0;

/*const displayQuestions = () => {
  container.innerHTML += questions(questionsArray[count]);
  count++;

  document.querySelectorAll(".answers").forEach((answer) => {
    answer.addEventListener("click", () => {
      questionsArray.forEach((answers) => {
        //console.log(answers.answers)
        answers.answers.forEach((options) => {
          if (options.correct === true) {
            console.log("answer is true")
            event.target.style.color = "green";
          } else if (options.correct === false) {
            console.log("incorrect answer");
            event.target.style.color = "red"
          }
        });
      });
    });
  });
};
displayQuestions();
*/