function calculateScore(callback) {
  const answers = {
    q1: "4",
    q2: "Paris",
    q3: "yes",
  };

  const userAnswers = {
    q1: document.getElementById("q1").value.trim(),
    q2: document.getElementById("q2").value.trim(),
    q3: document.getElementById("q3").value.trim(),
  };

  return callback(userAnswers, answers);
}

function strictScoring(userAnswers, correctAnswers) {
  let score = 0;
  for (let key in correctAnswers) {
    if (userAnswers[key] === correctAnswers[key]) {
      score++;
    }
  }
  document.getElementById(
    "scoreOutput"
  ).textContent = `Strict Score: ${score}/3`;
}

function lenientScoring(userAnswers, correctAnswers) {
  let score = 0;
  for (let key in correctAnswers) {
    if (userAnswers[key].toLowerCase() === correctAnswers[key].toLowerCase()) {
      score++;
    }
  }
  document.getElementById(
    "scoreOutput"
  ).textContent = `Lenient Score: ${score}/3`;
}

function checkScore(scoringFunction) {
  calculateScore(scoringFunction);
}
