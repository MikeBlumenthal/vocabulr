const PubSub = require('../helpers/pub_sub.js');
const AnswerView = require('./answer_view.js');

const ResponseView = function(element){
  this.element = element;
}

ResponseView.prototype.bindEvents = function () {
  PubSub.subscribe('Question:all-data-ready', (event) => {
    this.createAnswers(event.detail);
  });
  this.element.addEventListener('click', (event) => {
    PubSub.publish('ResponseView:answer-selected', event.target);
  })
};

ResponseView.prototype.createAnswers = function (answers) {
  const data = (answers.answers);
  const id = (answers._id);
  data.forEach((answer) => {
    answer.id = id;
    const answerView = new AnswerView(this.element);
    answerView.render(answer);
  });
};

module.exports = ResponseView;
