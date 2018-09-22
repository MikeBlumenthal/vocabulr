const Question = require('./models/question.js');
const QuestionView = require('./views/question_view.js');
const ResponseView = require('./views/response_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const questionViewTarget = document.querySelector('#question-view');
  const questionView = new QuestionView(questionViewTarget);
  questionView.bindEvents();

  const responseViewTarget = document.querySelector('#response-view');
  const responseView = new ResponseView(responseViewTarget);
  responseView.bindEvents();

  const questions = new Question();
  questions.getQuestions();

  const hintBtn = document.querySelector('#hint-btn'); // complexed enough to PubSub?
  hintBtn.addEventListener('click', () => { // need to randomize?
    const incorrectAnswer = document.querySelector('.answer[correct="false"]');
    incorrectAnswer.style.visibility = 'hidden';
  });
})
