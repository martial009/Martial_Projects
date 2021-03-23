"use strict";

const question = document.querySelector(".question");
const opt = document.querySelectorAll(".opt");
const option = document.querySelectorAll(".option");
const option1 = document.querySelector(".opt1");
const option2 = document.querySelector(".opt2");
const option3 = document.querySelector(".opt3");
const option4 = document.querySelector(".opt4");
const nextbtn = document.querySelector(".next");
const callAFriend = document.querySelector(".callAFriend");
const friend = document.querySelector(".friend");
const scoreText = document.querySelector(".moneySide");
const audience = document.querySelector('.askTheAudience')
const audience1 = document.querySelector('.audienceChart')
const next = document.querySelector('.next')
let quiz = [
  {
    question: "What is the full meaning of js? ",
    answer: ["JavaScript", "Jack and Sarah", "Java Scripture", "Java Speak"],
    correct: "JavaScript",
  },
  {
    question: "What is the full meaning of HTML? ",
    answer: [
      "HyperText Markup Language",
      "Hanah, Timothy, Michael and Lucas",
      "HyperText MakeUp Language",
      " How To Markup Language",
    ],
    correct: "HyperText Markup Language",
  },
  {
    question: "Who is the first Avenger? ",
    answer: ["Iron Man", "Captain America", "Thor", "Hulk"],
    correct: "Captain America",
  },
  {
    question: "Which of the following countries is not an Africa? ",
    answer: ["Nigeria", "cameroon", "England", "Ghana"],
    correct: "England",
  },
  {
    question: "CSS is mainly use for? ",
    answer: ["Mark Up", "Adding functions to web pages", "Styling", "Write Up"],
    correct: "Styling",
  },
  {
    question: "Which is the following is not an Europian Country? ",
    answer: ["Brazil", "Germany", "Spain", "Italy"],
    correct: "Brazil",
  },
];

const SCORE_POINT = 100;
//   const MAX_QUESTIONS=5

let currentquestion = Math.trunc(Math.random() * quiz.length);
loadquiz();
function loadquiz() {
  const currentQuizData = quiz[currentquestion];
  question.textContent = currentQuizData.question;
  option1.textContent = currentQuizData.answer[0];
  option2.textContent = currentQuizData.answer[1];
  option3.textContent = currentQuizData.answer[2];
  option4.textContent = currentQuizData.answer[3];
}

console.log(quiz[currentquestion].correct);
console.log(option[0].textContent);

for (let i = 0; i < opt.length; i++) {
  opt[i].addEventListener("click", function () {
    if (option[i].textContent === quiz[currentquestion].correct) {
      document.querySelector(".correct").classList.remove("hide");
      opt[i].style.backgroundColor = "green";
      scoreText.textContent = `${SCORE_POINT}`;
      SCORE_POINT = SCORE_POINT + 100;
      //  let currentquestion = Math.trunc(Math.random() * quiz.length);
    } else {
      document.querySelector(".wrong").classList.remove("hide");
      opt[i].style.backgroundColor = "red";
    }
  });
}



callAFriend.addEventListener("click", function () {
  friend.classList.toggle("hide");
  setTimeout(function () {
    friend.classList.toggle("hide");
  }, 5000);
});



audience.addEventListener("click", function () {
  audience1.classList.toggle("hiden");
  setTimeout(function () {
    audience1.classList.toggle("hiden"); 
  }, 5000);
});
next.addEventListener('click', function(){
  let currentquestion = Math.trunc(Math.random() * quiz.length);
loadquiz();
function loadquiz() {
 
  const currentQuizData = quiz[currentquestion];
  question.textContent = currentQuizData.question;
  option1.textContent = currentQuizData.answer[0];
  option2.textContent = currentQuizData.answer[1];
  option3.textContent = currentQuizData.answer[2];
  option4.textContent = currentQuizData.answer[3];
}
document.querySelector(".correct").classList.toggle("hide")
// for (let i = 0; i < opt.length; i++) {
//   opt[i].addEventListener("click", function () {
//     if (option[i].textContent === quiz[currentquestion].correct) {
//       document.querySelector(".correct").classList.remove("hide");
//       opt[i].style.backgroundColor = "green";
//       scoreText.textContent = `${SCORE_POINT}`;
//       SCORE_POINT = SCORE_POINT + 100;
//       //  let currentquestion = Math.trunc(Math.random() * quiz.length);
//     } else {
//       document.querySelector(".wrong").classList.remove("hide");
//       opt[i].style.backgroundColor = "red";
//     }
//   });
// }
}
);
// nextbtn.addEventListener('click', function(){
//     currentquestion = Math.trunc(Math.random() *quiz.length);
//     document.querySelector('.hide')
// })

//TIMER
// let timer = 20;
// let warning = 4;
// const timerld = setInterval(countdown, 1000);

// function countdown() {
//   document.querySelector(".counter").textContent = timer;
//   timer = timer - 1;
//   if (timer === warning) {
//     document.querySelector(".counter").style.backgroundColor = " red";
//   }
//   if (timer == -1) {
//     clearInterval(timerld);
//     document.querySelector(".wrong").classList.remove("hide");
//   }
// }
// countdown();
