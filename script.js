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

const questionsArray = [
  {
    question: "question1",
    answers: [
      { answera: "answer1a", correct: true },
      { answerb: "answer1b", correct: false },
      { answerc: "answer1c", correct: false },
      { answerd: "answer1d", correct: false },
    ],
  },
  {
    question: "question2",
    answers: [
      { answera: "answer2a", correct: false },
      { answerb: "answer2b", correct: true },
      { answerc: "answer2c", correct: false },
      { answerd: "answer2d", correct: false },
    ],
  },
  {
    question: "question3",
    answers: [
      { answera: "answer3", correct: false },
      { answerb: "answer3", correct: false },
      { answerc: "answer3", correct: true },
      { answerd: "answer3", correct: false },
    ],
  },
  {
    question: "question4",
    answers: [
      { answera: "answer4", correct: true },
      { answerb: "answer4", correct: false },
      { answerc: "answer4", correct: false },
      { answerd: "answer4", correct: false },
    ],
  },
];

//displays all question cards in one go

const questions = (question) => {
  console.log(`${question.answers[0].answera}`);
  return `
    <div class= "card">
    <h1 class= "question">${question.question}</h1>
    <div class="answers">
    <button class="a">${question.answers[0].answera}</button>
    <button class="b">${question.answers[1].answerb}</button>
    <button class="c">${question.answers[2].answerc}</button>
    <button class="d">${question.answers[3].answerd}</button>
    </div>
    </div>`;
};

const container = document.querySelector(".card-container");

questionsArray.forEach((question) => {
  container.innerHTML += questions(question);
});

//click on answer a for every question, check if it is true or false 
//console.log if button a cliked is correct answer
//console.log if button a clicked is wrong answer

document.querySelectorAll(".a").forEach((answer) => {
  answer.addEventListener("click", () => 
   { console.log("clicked option a")
    questionsArray.forEach((answers) => {
      if (answers.correct == true) {
        console.log("answer a clicked is true");
      } else if (answers.correct == false) {
        console.log("incorrect answer");
      }
    });
  });
});




