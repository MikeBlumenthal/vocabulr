const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');
const Randomiser = require('../helpers/randomiser.js')

const Question = function() {
  this.data = null;
  this.request = new Request('http://localhost:3000/api/questions');
}

Question.prototype.getQuestions = function () {
  this.request.get()
  .then((response) => {
    PubSub.publish('Question:all-data', response)
  })
};

Question.prototype.bindEvents = function () {
  PubSub.subscribe('ResultView:next-question', (event) => {
    const nextQuestion = this.getOneQuestion();
    PubSub.publish('Question:next-one-ready', nextQuestion);
  })
}

Question.prototype.categories = function () {

};

Question.prototype.getOneQuestion = function () {
  return this.data.pop();
};

module.exports = Question;
