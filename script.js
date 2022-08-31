/* Quiz 
    create a questions array 
    


 Create a function that will loop through the questions array, 
    and if user clicks on correct answer it will move on to the next question
     else if user clicks on incorrect answer it restarts the quiz from the start

  Display the question and answers on the html page 
        
  
  Create a home button to take user to start again and restart game
*/

//has all the questions and answers in an array

const questionsArray = [
  {
    question: "In the season 6 Thanksgiving episode, what dessert does Rachel try and make?",
    answers: [
      { a: "Trifle", correct: true },
      { b: "Cheesecake", correct: false },
      { c: "Chocolate Cake", correct: false },
      { d: "Eton Mess", correct: false },
    ],
  },
  {
    question: "How many sisters does Joey have?",
    answers: [
      { a: "3", correct: false },
      { b: "7", correct: true },
      { c: "0", correct: false },
      { d: "4", correct: false },
    ],
  },
  {
    question: "Who plays Emily's mum?",
    answers: [
      { a: "Jennifer Saunders", correct: true },
      { b: "Dawn French", correct: false },
      { c: "Julie Walters", correct: false },
      { d: "Joanna Lumley", correct: false },
    ],
  },
  {
    question: "What is Phoebe's middle name?",
    answers: [
      { a: "She never finds out", correct: true },
      { b: "Ursula", correct: false },
      { c: "Muriel", correct: false },
      { d: "Steven", correct: false },
    ],
  },
  {
    question: "Which Caribbean country does Ross' conference take place on in season 9?",
    answers: [
      { a: "Jamaica", correct: false },
      { b: "Aruba", correct: false },
      { c: "Barbados", correct: true },
      { d: "Trinidad", correct: false },
    ],
  },
  {
    question: "How many pages long was Rachel's letter to Ross?",
    answers: [
      { a: "8", correct: false },
      { b: "15", correct: false },
      { c: "16", correct: false },
      { d: "18", correct: true },
    ],
  },
  {
    question: "Who was the last friend to find out about Monica and Chandler?",
    answers: [
      { a: "Rachel", correct: false },
      { b: "Ross", correct: true },
      { c: "Phoebe", correct: false },
      { d: "Joey", correct: false },
    ],
  },
  {
    question: "What fake name does Joey go by?",
    answers: [
      { a: "Ken Adams", correct: true },
      { b: "John Tribbiani", correct: false },
      { c: "Ted Phalange", correct: false },
      { d: "Mike Hannigan", correct: false },
    ],
  },
  {
    question: "What name does Rachel’s sister Amy keep mistakenly calling Emma?",
    answers: [
      { a: "Erica", correct: false },
      { b: "Emmy", correct: false },
      { c: "Ellie", correct: false },
      { d: "Ella", correct: true },
    ],
  },
  {
    question: "",
    answers: [
      { a: "", correct: true },
      { b: "", correct: false },
      { c: "", correct: false },
      { d: "", correct: false },
    ],
  },
  {
    question: "",
    answers: [
      { a: "", correct: true },
      { b: "", correct: false },
      { c: "", correct: false },
      { d: "", correct: false },
    ],
  },
];
const homeButton = document.querySelector(".home");
const openingTitle = document.querySelector(".opening");
const cardContainer = document.querySelector(".card-container");
const questionHeading = document.getElementsByClassName("question")[0];
const answerButton = document.querySelectorAll(".answer");
const start = document.querySelector(".start");
const next = document.querySelector(".next");
const answerOption = document.querySelector(".answers");
const optA = document.querySelector("#a");
const optB = document.querySelector("#b");
const optC = document.querySelector("#c");
const optD = document.querySelector("#d");

const optsArray = [optA, optB, optC, optD];
console.log(optsArray[0]);

//displays all question cards in one go
let count = 0;

const displayQuestions = (questions) => {
  console.log(questionsArray);
  const questionName = questions[count].question;
  questionHeading.innerHTML = "";
  console.log(questionName);
  questionHeading.innerHTML += questionName;
  answerButton.forEach((answer) => {
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

const startQuiz = () => {
  //run functions that displays the questions
  openingTitle.classList.add("hidden");
  displayQuestions(questionsArray);
};
const homePage = () => {
  openingTitle.classList.remove("hidden");
  count = 0
};
const nextQuestion = () => {
  optsArray.forEach((option) => {
    option.style.color = "black";
  });

  count++;
  displayQuestions(questionsArray);
};
console.log(next);



next.addEventListener("click", nextQuestion);

start.addEventListener("click", startQuiz);

homeButton.addEventListener("click", homePage);

optsArray.forEach((option) => {
  option.addEventListener("click", () => {
    if (option.dataset.status == "true") {
      
      option.style.color = "green";
      console.log(option);
    } else {
      option.style.color = "red";
    }
    console.log(option.dataset.status);
  });
});
