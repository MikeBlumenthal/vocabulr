const Question = require('./models/question.js');

document.addEventListener('DOMContentLoaded', () => {
  const thing = new Question();
  thing.getQuestions();
})
