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
question = "What is your name? "
candidateName = input.question(question);
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
let i = 0;

while (i < questions.length) {
candidateAnswers[i] = input.question(questions[i]);
i++;
} console.log('\n');
}
function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly. 
console.log(`Candidate Name: ${candidateName}`);

for (let i = 0; i < questions.length ; i++) {
  console.log(`${i +1}) ${questions[i]}`);
  console.log(`Your Answer: ${candidateAnswers[i]}`);
  console.log(`Correct Answer: ${correctAnswers[i]} \n`);
}

  //TODO 3.2 use this variable to calculate the candidates score.
let scoreBoard = [];
let score = 0;
let grade = 0;
let gradeStatus = "FAILED";

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

  if (grade >= 80) {
    gradeStatus = "PASSED";
  }
}
} console.log(`>>> Overall Grade: ${grade}% (${score} of ${questions.length} responses correct) <<<`);
console.log(`>>> Status: ${gradeStatus} <<<`)
return grade;


} 


function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   //console.log("Hello " + candidateName);
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