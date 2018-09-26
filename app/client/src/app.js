const Question = require('./models/question.js');
const QuestionView = require('./views/question_view.js');
const ResponseView = require('./views/response_view.js');
const CategoryView = require('./views/category_view.js');
const ResultView = require('./views/result_view.js');
const HintView = require('./views/hint_view.js');
const Answer = require('./models/answer.js');
const FinalView = require('./views/final_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const headViewTarget = document.querySelector('#head-view');
  const bodyViewTarget = document.querySelector('#body-view');

  const responseView = new ResponseView(headViewTarget, bodyViewTarget);
  responseView.bindEvents();

  const categoryView = new CategoryView(headViewTarget);
  categoryView.bindEvents();

  const resultView = new ResultView(headViewTarget, bodyViewTarget);
  resultView.bindEvents();

  const finalView = new FinalView(headViewTarget, bodyViewTarget);
  finalView.bindEvents();

  const answer = new Answer();
  answer.bindEvents();

  const questions = new Question();
  questions.bindEvents();
  questions.getData();
});
