const PubSub = require('../helpers/pub_sub.js');
const Randomiser = require('../helpers/randomiser.js')
const QuestionView = require('./question_view.js');
const AnswerView = require('./answer_view.js');
const HintView = require('./hint_view.js');

const ResponseView = function(headElement, bodyElement ){
  this.head = headElement;
  this.body = bodyElement;
}

ResponseView.prototype.bindEvents = function () {

  PubSub.subscribe('Question:first-question-ready', (event) => {
    this.createDisplay(event.detail.question);
  });

  PubSub.subscribe('Question:next-one-ready', (event) => {
    this.createDisplay(event.detail);
  });

  this.body.addEventListener('click', (event) => {
    if( (event.target.id !== 'next-btn') && (event.target.id !== 'hint-btn') && (event.target.id !== 'result') ){
      PubSub.publish('ResponseView:answer-selected', event.target);
    }
  })
};

ResponseView.prototype.createDisplay = function (data) {
  this.clear();
  this.createQuestion(data.word);
  this.createAnswers(data);
  this.createHint();
};


ResponseView.prototype.clear = function () {
  this.head.innerHTML = '';
  this.body.innerHTML = '';
};


ResponseView.prototype.createQuestion = function (word) {
  const questionView = new QuestionView(this.head);
  questionView.createQuestion(word);
};


ResponseView.prototype.createAnswers = function (obj) {

  const answerArray = obj.answers;
  Randomiser.randomise(answerArray);

  answerArray.forEach((answer) => {
    answer.category = obj.category;
    answer.id = obj._id;
    answer.word = obj.word;
    const answerView = new AnswerView(this.body);
    answerView.render(answer);
  });
};


ResponseView.prototype.createHint = function () {

  const hintBtn = document.createElement('button');
  hintBtn.id = 'hint-btn';
  hintBtn.textContent = 'Hint';
  hintBtn.type = 'submit';

  const hintView = new HintView();
  this.body.appendChild(hintBtn);
  hintView.bindEvents();
};


module.exports = ResponseView;
