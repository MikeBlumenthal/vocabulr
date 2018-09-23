const Question = require('./models/question.js');
const QuestionView = require('./views/question_view.js');
const ResponseView = require('./views/response_view.js');
const HintView = require('./views/hint_view.js');
const Base64 = require('./helpers/base64.js');

document.addEventListener('DOMContentLoaded', () => {
  const questionViewTarget = document.querySelector('#question-view');
  const questionView = new QuestionView(questionViewTarget);
  questionView.bindEvents();

  const responseViewTarget = document.querySelector('#response-view');
  const responseView = new ResponseView(responseViewTarget);
  responseView.bindEvents();

  const hintView = new HintView();
  hintView.bindEvents();

  const questions = new Question();
  questions.getQuestions();

  const b = new Base64();
  console.log(b.encode('working'));
});
