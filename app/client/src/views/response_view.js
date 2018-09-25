const PubSub = require('../helpers/pub_sub.js');
const AnswerView = require('./answer_view.js');
const Randomiser = require('../helpers/randomiser.js')
const HintView = require('./hint_view.js');

const ResponseView = function(element){
  this.element = element;
}

ResponseView.prototype.bindEvents = function () {
  PubSub.subscribe('Question:first-question-ready', (event) => {
    this.createAnswers(event.detail);
  });
  PubSub.subscribe('Question:next-one-ready', (event) => {
    this.createAnswers(event.detail);
  });
  this.element.addEventListener('click', (event) => {
    if(event.target.id !== 'next-question'){
      PubSub.publish('ResponseView:answer-selected', event.target);
    }
  })
};

ResponseView.prototype.createAnswers = function (answers) {
  this.element.innerHTML = '';
  const answerArray = answers.answers;
  Randomiser.randomise(answerArray);
  const id = (answers._id);

  answerArray.forEach((answer) => {
    answer.id = id;
    const answerView = new AnswerView(this.element);
    answerView.render(answer);
  });

  const hintBtn = document.createElement('button');
  hintBtn.id = 'hint-btn';
  hintBtn.textContent = 'Hint';
  hintBtn.type = 'submit';

  const hintView = new HintView();
  this.element.appendChild(hintBtn);
  hintView.bindEvents();
};

module.exports = ResponseView;
