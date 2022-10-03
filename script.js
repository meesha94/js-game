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
    question: "What’s the name of the grumpy man who lived below Monica’s apartment?",
    answers: [
      { a: "Mr Heckler", correct: false },
      { b: "Mr Hickles", correct: false },
      { c: "Mr Heckles", correct: true },
      { d: "Mr Finches", correct: false },
    ],
  },
  {
    question: "How many categories did Monica have for her towels?",
    answers: [
      { a: "5", correct: false },
      { b: "11", correct: true },
      { c: "8", correct: false },
      { d: "15", correct: false },
    ],
  },
  {
    question: "Where does Chandler tell Janice he is moving?",
    answers: [
      { a: "Minsk", correct: false },
      { b: "Russia", correct: false },
      { c: "Yukon", correct: false },
      { d: "Yemen", correct: true },
    ],
  },
  {
    question: "What was the name of Joey’s BarcaLounger?",
    answers: [
      { a: "Rosita", correct: true },
      { b: "Rose", correct: false },
      { c: "Pamela", correct: false },
      { d: "Yasmin", correct: false },
    ],
  },
  {
    question: "What does Ross' boss at the museum do to send him into a rage?",
    answers: [
      { a: "He dated Monica", correct: false },
      { b: "He scratched his car", correct: false },
      { c: "He broke his projector", correct: false },
      { d: "He ate his sandwich", correct: true },
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



//displays all question cards 
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
  //run function that displays the questions
  openingTitle.classList.add("hidden");
  displayQuestions(questionsArray);
  
  
};
const homePage = () => {
  openingTitle.classList.remove("hidden");
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
      option.style.color = "#3EA34D";
      console.log(option);
    } else {
      option.style.color = "#bf0603";
    }
    console.log(option.dataset.status);
  });
});
