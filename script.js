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
      { a: "answer3", correct: true },
      { b: "answer3", correct: false },
      { c: "answer3", correct: false },
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
const homeButton = document.querySelector(".home")
const openingTitle = document.querySelector(".opening")
const cardContainer = document.querySelector(".card-container")
const questionHeading = document.getElementsByClassName("question")[0]
const answerButton = document.querySelectorAll(".answer")
const start = document.querySelector(".start")
const next = document.querySelector(".next");
const answerOption = document.querySelector(".answers")
const optA = document.querySelector("#a")
const optB = document.querySelector("#b")
const optC = document.querySelector("#c")
const optD = document.querySelector("#d")
const optsArray= [optA, optB, optC, optD]
console.log(optsArray[0])


//displays all question cards in one go
let count = 0;

const displayQuestions = (questions) => {
  
  console.log(questionsArray);
  const questionName = questions[count].question 
  questionHeading.innerHTML = "";
  console.log(questionName) 
  questionHeading.innerHTML +=  questionName
  answerButton.forEach((answer) => {
    answer.innerHTML = ""
    //console.log(questions[0].answers[1]) 
    if (answer.value === "a"){
    answer.setAttribute("data-status", questions[count].answers[0].correct) 
      answer.innerHTML += questions[count].answers[0].a
    } else if (answer.value === "b") {
      answer.setAttribute("data-status", questions[count].answers[1].correct)
      answer.innerHTML += questions[count].answers[1].b
     
    }  else if (answer.value === "c") {
      answer.setAttribute("data-status", questions[count].answers[2].correct)
      answer.innerHTML += questions[count].answers[2].c
    }else if (answer.value === "d") {
      answer.setAttribute("data-status", questions[count].answers[3].correct)
      answer.innerHTML += questions[count].answers[3].d
    }
    
  })
    
}







const startQuiz = () => {
//run functions that displays the questions
openingTitle.classList.add("hidden")
 displayQuestions(questionsArray)

}
const homePage = () => {
  openingTitle.classList.remove("hidden")
}
const nextQuestion = () => {
  optsArray.forEach(option => {
    option.style.color = "black"
  }) 
  count++;
 displayQuestions(questionsArray)

}
console.log(next)

next.addEventListener("click", nextQuestion) 

start.addEventListener("click", startQuiz)

homeButton.addEventListener("click", homePage)






optsArray.forEach((option) => {
  option.addEventListener("click", () => {
    if (option.dataset.status == "true"){
      //option.classList.add("correct")
      option.style.color = "green";
      console.log(option)
    } else {
      option.style.color = "red";
    }
    console.log(option.dataset.status)
  })
  }
  
)







