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
const next = document.getElementsByClassName(".next")


const questionsArray = [
  {
    question: "question1",
    answers: [
      { a: "answer1a", correct: true },
      { b: "answer1b", correct: false },
      { c: "answer1c", correct: false },
      { d: "answer1d", correct: false },
    ],
  },
  {
    question: "question2",
    answers: [
      { a: "answer2a", correct: false },
      { b: "answer2b", correct: true },
      { c: "answer2c", correct: false },
      { d: "answer2d", correct: false },
    ],
  },
  {
    question: "question3",
    answers: [
      { a: "answer3", correct: false },
      { b: "answer3", correct: false },
      { c: "answer3", correct: true },
      { d: "answer3", correct: false },
    ],
  },
  {
    question: "question4",
    answers: [
      { a: "answer4", correct: true },
      { b: "answer4", correct: false },
      { c: "answer4", correct: false },
      { d: "answer4", correct: false },
    ],
  },
];

//displays all question cards in one go

const questions = (question) => {
  //console.log(`${question.answers[0].a}`);
  return `
    <div class= "card">
    <h1 class= "question">${question.question}</h1>
    <div class="answers">
    <button class="a">${question.answers[0].a}</button>
    <button class="b">${question.answers[1].b}</button>
    <button class="c">${question.answers[2].c}</button>
    <button class="d">${question.answers[3].d}</button>
    </div>
    </div>`;
};

const container = document.querySelector(".card-container");
//displays questions one at at time, 
let count = 0;
let counter = 0;
const displayQuestions = () => {
    
container.innerHTML += questions(questionsArray[count])
count ++;

document.querySelectorAll(".answers").forEach((answer) => {
    answer.addEventListener("click", () => 
     { //console.log(`${answer}`)
      questionsArray.forEach((answers) => {
         
          //console.log(answers.answers)
          answers.answers.forEach((options) => {
              if (options.correct == true) {
                  console.log("answer is true")
                  return counter++
                  
                } else if (options.correct == false) {
                  console.log("incorrect answer");
                }
          })
        
      });
    });
  });
}
displayQuestions()

//displays all questions in one go 
/*questionsArray.forEach((question) => {
  container.innerHTML += questions(question);
});
*/


//click on answer a for every question, check if it is true or false 
//console.log if button a cliked is correct answer
//console.log if button a clicked is wrong answer






