var readlineSync = require("readline-sync");

var userName = readlineSync.question("What is your name?\n");
var score = 0;
console.log("Welcome " + userName + " to quiz of Arspl0it");
console.log("Press Q to exit");

function play(question, answer) {
  var userAnswer = readlineSync.question(`${question}\nYour Answer: `).toUpperCase();
  if (userAnswer === answer) {
    console.log("Right Answer!");
    score = score + 1;
  } else {
    if (userAnswer === "Q") {
      return "Quit";
    }
    console.log("Wrong Answer!");
  }
  console.log("Your current score is: " + score);
  console.log("-------------");
  if (score === 7) {
    console.log("\n🎉Congratulations!! You scored 7/7🎉.\n \n😎You are truly a Interstellar Fan😎\n");
  }
  // else{
  //   console.log("You need to gain some m");
  // }
  // if (score === 1, 2 ,3 ,4, 5) {
  //   console.log("You need to increase your CyberAwarness");
  // }
}

// array

var questions = [{
  question: `Ⅰ. What the first planet that cooper arrived?
  A. Miller's planet
  B. James planet
  C. Saturn
  D. Pluto`,
  answer: "A"
}, {
  question: `Ⅱ. Who was the ghost behind the book shelf?
  A. Tom
  B. Brand
  C. Cooper
  D. Murph`,
  answer: "C"
}, {
  question: `Ⅲ. What was the time of miller planet w.r.t earth?
  A. 1 hour = 1 second
  B. 1 hour = 365 days
  C. 1 hour = 1 hour
  D. 1 hour = 7 years`,
  answer: "D"
}, {
  question: `Ⅳ. What bends on going near to wormhole?
  A. Space and time
  B. Gravity and time
  C. Time
  D. Gravity`,
  answer: "B"
}, {
  question: `Ⅴ. Which law Cooper uses to return back?
  A. Thermodynamics Law
  B. Second Law
  C. Third Law
  D. First Law`,
  answer: "C"
}, {
  question: `Ⅵ. What was the name of planet that orbits the black hole GARGANTUA?
  A. Mann
  B. JB-7846GFS
  C. Jupiter
  D. Saturn`,
  answer: "A"
},{
  question: `Ⅶ. What was the name of 5th dimensional space where cooper landed?
  A. Tesseract
  B. Endurance
  C. Gargantua
  D. TARS`,
  answer: "A"
}]

for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  const result = play(currentQuestion.question, currentQuestion.answer);
  if (result === "Quit") {
    console.log(`Bye see you soon again.`)
    break;
  }

}
console.log(`${userName} your final score is: ${score}.\n \nThank you for playing....`);