const input = require('readline-sync');

// TODO 2: modify  your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";

//TODO: Variables for Part 2
let questions = [
  "Who was the first American woman in space? ",
  "True or false: 5 kilometer == 5000 meters? ",
  "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS? "
];
let correctAnswers = [
  "Sally Ride",
  "true",
  "40",
  "Trajectory",
  "3"
];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
// console.log("What is your name?");                  //commented out because assignment to constant 'input' causing error
// input = candidateName;
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
//console.log("Who was the first American woman in space? ");
//input = candidateAnswer;
let i = 0;
candidateAnswer = input;

while (i < questions.length) {
candidateAnswers[i] = input.question(questions[i]);
i++;
}
}
function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly. 
  //LECTURE NOTES:
    // SHOULD BE A CONDITIONAL. 
    // USE LOWERCASE OR UPPERCASE METHODS TO MAKE CASE INSENSITIVE, YOUR CHOICE. 
    // A LOOP ONLY LOOKS AT THE INDEX?


// if (candidateAnswer === correctAnswer) {
//   console.log("You are correct!");
// } else {
//   console.log("Sorry, try again");


for (let i = 0; i < questions.length ; i++) {
  console.log(`${questions[i]}`);
  console.log(`Your Answer: ${candidateAnswers[i]}`);
  console.log(`Correct Answer: ${correctAnswers[i]}`);
}

  //TODO 3.2 use this variable to calculate the candidates score.
let scoreBoard = [];
let score = 0;
let grade = 0;
let numberOfQuestions = questions.length;

let userAnswers = candidateAnswers.join(',');
userAnswers = userAnswers.toLowerCase();
userAnswers = userAnswers.split(',');

let quizAnswers = correctAnswers.join(',')
quizAnswers = quizAnswers.toLowerCase();
quizAnswers = quizAnswers.split(',')

for (let i = 0; i < questions.length; i++) {
if (userAnswers[i] === quizAnswers[i]) {

  scoreBoard.push(1);
  score = scoreBoard.length;
  grade = (score/questions.length) * 100;
}
} console.log(grade);
return grade;

} 


function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log("Hello" + candidateName);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};