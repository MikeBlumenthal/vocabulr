const Question = require('./models/question.js');
const QuestionView = require('./views/question_view.js');
const ResponseView = require('./views/response_view.js');
const ResultView = require('./views/result_view.js');
const HintView = require('./views/hint_view.js');
const Answer = require('./models/answer.js');

document.addEventListener('DOMContentLoaded', () => {
  const questionViewTarget = document.querySelector('#question-view');
  const questionView = new QuestionView(questionViewTarget);
  questionView.bindEvents();

  const responseViewTarget = document.querySelector('#response-view');
  const responseView = new ResponseView(responseViewTarget);
  responseView.bindEvents();

  const resultView = new ResultView();
  resultView.bindEvents();

  const hintView = new HintView();
  hintView.bindEvents();

  const answer = new Answer();
  answer.bindEvents();

  const questions = new Question();
  questions.getQuestions();
});
