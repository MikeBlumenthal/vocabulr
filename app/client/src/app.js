const Answer = require('./models/answer.js');
const Question = require('./models/question.js');
const CategoryView = require('./views/category_view.js');
const ResponseView = require('./views/response_view.js');
const ResultView = require('./views/result_view.js');
const FinalView = require('./views/final_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const headViewTarget = document.querySelector('#head-view');
  const bodyViewTarget = document.querySelector('#body-view');

  const categoryView = new CategoryView(headViewTarget, bodyViewTarget);
  categoryView.bindEvents();

  const responseView = new ResponseView(headViewTarget, bodyViewTarget);
  responseView.bindEvents();

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
