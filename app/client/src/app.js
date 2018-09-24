const Question = require('./models/question.js');
const QuestionView = require('./views/question_view.js');
const ResponseView = require('./views/response_view.js');
const CategoryView = require('./views/category_view.js');
const ResultView = require('./views/result_view.js');
const HintView = require('./views/hint_view.js');
const Answer = require('./models/answer.js');
// const Tts = require('./helpers/tts.js');

document.addEventListener('DOMContentLoaded', () => {
  const questionViewTarget = document.querySelector('#question-view');
  const questionView = new QuestionView(questionViewTarget);
  questionView.bindEvents();

  const responseViewTarget = document.querySelector('#response-view');
  const responseView = new ResponseView(responseViewTarget);
  responseView.bindEvents();

  const categoryView = new CategoryView(questionViewTarget);
  categoryView.bindEvents();

  const resultViewTarget = document.querySelector('#result-view');
  const resultView = new ResultView(resultViewTarget);
  resultView.bindEvents();

  const hintView = new HintView();
  hintView.bindEvents();

  const answer = new Answer(responseViewTarget);
  answer.bindEvents();

  const questions = new Question();
  questions.getData();
  questions.bindEvents();
});
