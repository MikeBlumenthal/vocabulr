const Question = require('./models/question.js');
const QuestionView = require('./views/question_view.js');
const ResponseView = require('./views/response_view.js');
const CategoryView = require('./views/category_view.js');
const ResultView = require('./views/result_view.js');
const HintView = require('./views/hint_view.js');
const Answer = require('./models/answer.js');

document.addEventListener('DOMContentLoaded', () => {
  const headViewTarget = document.querySelector('#head-view');
  const bodyViewTarget = document.querySelector('#body-view');

  const questionView = new QuestionView(headViewTarget);
  questionView.bindEvents();

  const responseView = new ResponseView(bodyViewTarget);
  responseView.bindEvents();

  const categoryView = new CategoryView(headViewTarget);
  categoryView.bindEvents();

  const resultView = new ResultView(bodyViewTarget);
  resultView.bindEvents();

  const hintView = new HintView();
  hintView.bindEvents();

  const answer = new Answer(bodyViewTarget);
  answer.bindEvents();

  const questions = new Question();
  questions.bindEvents();
  questions.getData();
});
