const prompt = require("prompt");

// Quiz questions and answers
const questions = [
  {
    question: "What is the capital of France?",
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    answer: "Mars",
  },
  {
    question: "What is the largest mammal in the world?",
    answer: "Blue Whale",
  },
  {
    question: "In which year did the Titanic sink?",
    answer: "1912",
  },
  {
    question: "What is the currency of Japan?",
    answer: "Yen",
  },
];

function startQuiz() {
  let correctAnswers = 0;

  function askQuestion(index) {
    if (index === questions.length) {
      // Quiz finished, show results
      console.log(
        `You answered ${correctAnswers} out of ${questions.length} questions correctly.`
      );

      // Ask if the user wants to play again
      prompt.get(["playAgain"], function (err, result) {
        if (result.playAgain.toLowerCase() === "yes") {
          // Restart the quiz
          startQuiz();
        } else {
          // Exit the program
          console.log("Goodbye!");
          process.exit();
        }
      });
    } else {
      // Ask the current question
      const currentQuestion = questions[index].question;
      prompt.get([currentQuestion], function (err, result) {
        const userAnswer = result[currentQuestion];
        const correctAnswer = questions[index].answer;

        if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
          console.log("Correct!\n");
          correctAnswers++;
        } else {
          console.log(`Incorrect. The correct answer is: ${correctAnswer}\n`);
        }

        // Move on to the next question
        askQuestion(index + 1);
      });
    }
  }

  // Start the quiz with the first question
  askQuestion(0);
}

// Start the quiz
startQuiz();
