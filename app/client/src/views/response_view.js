const PubSub = require('../helpers/pub_sub.js');
const AnswerView = require('./answer_view.js');

const ResponseView = function(element){
  this.element = element;
}

ResponseView.prototype.bindEvents = function () {
  PubSub.subscribe('Question:all-data-ready', (event) => {
    this.createAnswers(event.detail.answers);
  });
};

ResponseView.prototype.createAnswers = function (answers) {
  answers.forEach((answer) => {
    const answerView = new AnswerView(this.element);
    answerView.render(answer);
  });
};

module.exports = ResponseView;
