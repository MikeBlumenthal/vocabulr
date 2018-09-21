const Question = require('./models/question.js');
const QuestionView = require('./views/question_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const questionViewTarget = document.querySelector('#question-view')
  const questionView = new QuestionView(questionViewTarget);
  questionView.bindEvents();

  const questions = new Question();
  questions.getQuestions();
})
