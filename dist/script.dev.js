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
    answera: "answer1a",
    correct: true
  }, {
    answerb: "answer1b",
    correct: false
  }, {
    answerc: "answer1c",
    correct: false
  }, {
    answerd: "answer1d",
    correct: false
  }]
}, {
  question: "question2",
  answers: [{
    answera: "answer2a",
    correct: true
  }, {
    answerb: "answer2b",
    correct: false
  }, {
    answerc: "answer2c",
    correct: false
  }, {
    answerd: "answer2d",
    correct: false
  }]
}, {
  question: "question3",
  answers: [{
    answera: "answer3",
    correct: true
  }, {
    answerb: "answer3",
    correct: false
  }, {
    answerc: "answer3",
    correct: false
  }, {
    answerd: "answer3",
    correct: false
  }]
}, {
  question: "question4",
  answers: [{
    answera: "answer4",
    correct: true
  }, {
    answerb: "answer4",
    correct: false
  }, {
    answerc: "answer4",
    correct: false
  }, {
    answerd: "answer4",
    correct: false
  }]
}]; //displays all question cards in one go

var questions = function questions(question) {
  console.log("".concat(question.answers[0].answera));
  return "\n    <div class= \"card\">\n    <h1 class= \"question\">".concat(question.question, "</h1>\n    <div class=\"answers\">\n    <button class=\"a\">").concat(question.answers[0].answera, "</button>\n    <button class=\"b\">").concat(question.answers[1].answerb, "</button>\n    <button class=\"c\">").concat(question.answers[2].answerc, "</button>\n    <button class=\"d\">").concat(question.answers[3].answerd, "</button>\n    </div>\n    </div>");
};

var container = document.querySelector(".card-container");
questionsArray.forEach(function (question) {
  container.innerHTML += questions(question);
}); //declares first button as a global variable

var button = document.getElementsByTagName("button")[0]; // if button 1 is clicked console.log("working")

button.addEventListener("click", function () {
  return console.log("clicked answer a");
}); //console.log if button cliked is correct answer
//console.log if button clicked is wrong answer