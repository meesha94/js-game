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
var questions = [{
  question: question1,
  answers: [{
    answer: answer1a,
    correct: true
  }, {
    answer: answer1b,
    correct: false
  }, {
    answer: answer1c,
    correct: false
  }, {
    answer: answer1d,
    correct: false
  }]
}, {
  question: question2,
  answers: [{
    answer: answer2a,
    correct: true
  }, {
    answer: answer2b,
    correct: false
  }, {
    answer: answer2c,
    correct: false
  }, {
    answer: answer2d,
    correct: false
  }]
}, {
  question: question3,
  answers: [{
    answer: answer3,
    correct: true
  }, {
    answer: answer3,
    correct: false
  }, {
    answer: answer3,
    correct: false
  }, {
    answer: answer3,
    correct: false
  }]
}, {
  question: question4,
  answers: [{
    answer: answer4,
    correct: true
  }, {
    answer: answer4,
    correct: false
  }, {
    answer: answer4,
    correct: false
  }, {
    answer: answer4,
    correct: false
  }]
}];