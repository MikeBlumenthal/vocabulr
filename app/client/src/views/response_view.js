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
    this.clear();
    this.createQuestion(event.detail.question.word);
    this.createAnswers(event.detail.question);
    this.createHint();
  });

  PubSub.subscribe('Question:next-one-ready', (event) => {
    this.clear();
    this.createQuestion(event.detail.word);
    this.createAnswers(event.detail);
    this.createHint();
  });

  this.body.addEventListener('click', (event) => {
    if( (event.target.id !== 'next-btn') && (event.target.id !== 'result') ){
      PubSub.publish('ResponseView:answer-selected', event.target);
    }
  })
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
  const category = obj.category;
  const id = obj._id;
  const word = obj.word

  const answerArray = obj.answers;
  Randomiser.randomise(answerArray);

  answerArray.forEach((answer) => {

    answer.word = word;
    answer.id = id;
    answer.category = category;
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
